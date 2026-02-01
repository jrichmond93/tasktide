'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Task, BoardState, ColumnId } from '@/lib/types';
import {
  loadBoardState,
  saveBoardState,
  getInitialState,
  exportToJSON,
} from '@/lib/storage';
import { getSessionQuote } from '@/lib/quotes';
import { supabase } from '@/lib/supabase/client';
import Column from '@/components/Column';
import AddTaskForm from '@/components/AddTaskForm';
import ThemeToggle from '@/components/ThemeToggle';
import TaskCard from '@/components/TaskCard';
import EditTaskForm from '@/components/EditTaskForm';
import EmptyBoardState from '@/components/EmptyBoardState';

export default function Home() {
  const [boardState, setBoardState] = useState<BoardState>(getInitialState());
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [quote, setQuote] = useState<string>('');
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginNotice, setShowLoginNotice] = useState(true);
  const router = useRouter();

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      // Only check auth if supabase is available
      if (!supabase) {
        setIsAuthenticated(false);
        return;
      }
      
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      if (session) {
        router.push('/boards');
      }
    };
    checkAuth();
  }, [router]);

  // Load board state on mount
  useEffect(() => {
    setMounted(true);
    const savedState = loadBoardState();
    if (savedState) {
      setBoardState(savedState);
    }

    // Load motivational quote
    getSessionQuote().then((q) => setQuote(`"${q.text}" - ${q.author}`));
  }, []);

  // Save board state whenever it changes
  useEffect(() => {
    if (mounted) {
      saveBoardState(boardState);
    }
  }, [boardState, mounted]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const task = boardState.tasks[active.id as string];
    setActiveTask(task);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const overId = over.id as string;

    // Check if dropped over a column
    const targetColumn = boardState.columnOrder.find((colId) => colId === overId) as ColumnId | undefined;

    if (targetColumn) {
      const task = boardState.tasks[taskId];
      if (!task || task.column_id === targetColumn) return;

      // Move task to new column
      const sourceColumn = boardState.columns[task.column_id];
      const destColumn = boardState.columns[targetColumn];

      setBoardState({
        ...boardState,
        tasks: {
          ...boardState.tasks,
          [taskId]: {
            ...task,
            column_id: targetColumn,
            updated_at: new Date().toISOString(),
          },
        },
        columns: {
          ...boardState.columns,
          [task.column_id]: {
            ...sourceColumn,
            taskIds: sourceColumn.taskIds.filter((id: string) => id !== taskId),
          },
          [targetColumn]: {
            ...destColumn,
            taskIds: [...destColumn.taskIds, taskId],
          },
        },
      });
    }
  };

  const handleAddTask = (task: Omit<Task, 'id' | 'created_at' | 'updated_at' | 'order' | 'archived' | 'archived_at'>) => {
    const newTaskId = `task-${Date.now()}`;
    const newTask: Task = {
      ...task,
      id: newTaskId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      order: boardState.columns[task.column_id].taskIds.length,
      archived: false,
      archived_at: null,
    };

    setBoardState({
      ...boardState,
      tasks: {
        ...boardState.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...boardState.columns,
        [task.column_id]: {
          ...boardState.columns[task.column_id],
          taskIds: [...boardState.columns[task.column_id].taskIds, newTaskId],
        },
      },
    });

    setIsAddTaskOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    const task = boardState.tasks[taskId];
    const column = boardState.columns[task.column_id];

    const { [taskId]: deleted, ...remainingTasks } = boardState.tasks;

    setBoardState({
      ...boardState,
      tasks: remainingTasks,
      columns: {
        ...boardState.columns,
        [task.column_id]: {
          ...column,
          taskIds: column.taskIds.filter((id: string) => id !== taskId),
        },
      },
    });
  };

  const handleEditTask = (updatedTask: Task) => {
    const oldTask = boardState.tasks[updatedTask.id];

    // If column changed, update both columns
    if (oldTask.column_id !== updatedTask.column_id) {
      const oldColumn = boardState.columns[oldTask.column_id];
      const newColumn = boardState.columns[updatedTask.column_id];

      setBoardState({
        ...boardState,
        tasks: {
          ...boardState.tasks,
          [updatedTask.id]: updatedTask,
        },
        columns: {
          ...boardState.columns,
          [oldTask.column_id]: {
            ...oldColumn,
            taskIds: oldColumn.taskIds.filter((id: string) => id !== updatedTask.id),
          },
          [updatedTask.column_id]: {
            ...newColumn,
            taskIds: [...newColumn.taskIds, updatedTask.id],
          },
        },
      });
    } else {
      setBoardState({
        ...boardState,
        tasks: {
          ...boardState.tasks,
          [updatedTask.id]: updatedTask,
        },
      });
    }
    setEditingTask(null);
  };

  const handleArchiveTask = (taskId: string) => {
    const task = boardState.tasks[taskId];
    const column = boardState.columns[task.column_id];

    setBoardState({
      ...boardState,
      tasks: {
        ...boardState.tasks,
        [taskId]: {
          ...task,
          archived: true,
          archived_at: new Date().toISOString(),
        },
      },
      columns: {
        ...boardState.columns,
        [task.column_id]: {
          ...column,
          taskIds: column.taskIds.filter((id: string) => id !== taskId),
        },
      },
    });
  };

  const handleExportJSON = () => {
    const json = exportToJSON(boardState);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `taskbreez-export-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Filter tasks based on search term and exclude archived
  const filteredBoardState = {
    ...boardState,
    columns: Object.fromEntries(
      Object.entries(boardState.columns).map(([colId, column]) => [
        colId,
        {
          ...column,
          taskIds: column.taskIds.filter((taskId) => {
            const task = boardState.tasks[taskId];
            return (
              !task.archived &&
              (task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               task.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );
          }),
        },
      ])
    ),
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Hero Section - SEO & User Info */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Task Breezer - Simple Kanban Task Management
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Organize your tasks efficiently with our intuitive Kanban board. 
              Drag and drop tasks between columns, set priorities, track deadlines, 
              and boost your productivity with a clean, distraction-free interface.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Drag & Drop Tasks
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Due Date Tracking
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Priority Levels
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Cloud Sync
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Login Notice for Unauthenticated Users */}
      {!isAuthenticated && showLoginNotice && (
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌊</span>
                <p className="text-sm font-medium">
                  You&apos;re using Task Breezer offline. Sign in to sync your tasks across devices!
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => router.push('/login')}
                  className="px-4 py-1.5 bg-white text-blue-600 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowLoginNotice(false)}
                  className="text-white hover:text-blue-100 transition-colors"
                  aria-label="Dismiss"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Page Header with Quote and Actions */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          {quote && (
            <p className="text-sm text-gray-600 dark:text-gray-400 italic mb-4">
              {quote}
            </p>
          )}

          {/* Search and Add Task */}
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleExportJSON}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Export JSON
            </button>
            <button
              onClick={() => setIsAddTaskOpen(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="max-w-[1600px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Check if board is completely empty */}
        {Object.keys(boardState.tasks).filter(taskId => !boardState.tasks[taskId].archived).length === 0 ? (
          <EmptyBoardState 
            onAddTask={() => setIsAddTaskOpen(true)}
            isAuthenticated={isAuthenticated}
          />
        ) : (
          <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {boardState.columnOrder.map((columnId) => {
                const column = filteredBoardState.columns[columnId as ColumnId];
                const tasks = column.taskIds.map((taskId) => boardState.tasks[taskId]);

                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    onDeleteTask={handleDeleteTask}
                    onEditTask={(taskId) => setEditingTask(boardState.tasks[taskId])}
                    onArchiveTask={handleArchiveTask}
                  />
                );
              })}
            </div>

            <DragOverlay>
              {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
            </DragOverlay>
          </DndContext>
        )}
      </div>

      {/* Add Task Modal */}
      {isAddTaskOpen && (
        <AddTaskForm onSubmit={handleAddTask} onClose={() => setIsAddTaskOpen(false)} />
      )}

      {/* Edit Task Modal */}
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onSubmit={handleEditTask}
          onClose={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}
