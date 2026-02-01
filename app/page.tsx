'use client';

import { useState, useEffect } from 'react';
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
import Column from '@/components/Column';
import AddTaskForm from '@/components/AddTaskForm';
import ThemeToggle from '@/components/ThemeToggle';
import TaskCard from '@/components/TaskCard';
import EditTaskForm from '@/components/EditTaskForm';

export default function Home() {
  const [boardState, setBoardState] = useState<BoardState>(getInitialState());
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [quote, setQuote] = useState<string>('');
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [mounted, setMounted] = useState(false);

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
      if (!task || task.columnId === targetColumn) return;

      // Move task to new column
      const sourceColumn = boardState.columns[task.columnId];
      const destColumn = boardState.columns[targetColumn];

      setBoardState({
        ...boardState,
        tasks: {
          ...boardState.tasks,
          [taskId]: {
            ...task,
            columnId: targetColumn,
            updatedAt: new Date().toISOString(),
          },
        },
        columns: {
          ...boardState.columns,
          [task.columnId]: {
            ...sourceColumn,
            taskIds: sourceColumn.taskIds.filter((id) => id !== taskId),
          },
          [targetColumn]: {
            ...destColumn,
            taskIds: [...destColumn.taskIds, taskId],
          },
        },
      });
    }
  };

  const handleAddTask = (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt' | 'order' | 'archived' | 'archivedAt'>) => {
    const newTaskId = `task-${Date.now()}`;
    const newTask: Task = {
      ...task,
      id: newTaskId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      order: boardState.columns[task.columnId].taskIds.length,
      archived: false,
      archivedAt: null,
    };

    setBoardState({
      ...boardState,
      tasks: {
        ...boardState.tasks,
        [newTaskId]: newTask,
      },
      columns: {
        ...boardState.columns,
        [task.columnId]: {
          ...boardState.columns[task.columnId],
          taskIds: [...boardState.columns[task.columnId].taskIds, newTaskId],
        },
      },
    });

    setIsAddTaskOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    const task = boardState.tasks[taskId];
    const column = boardState.columns[task.columnId];

    const { [taskId]: deleted, ...remainingTasks } = boardState.tasks;

    setBoardState({
      ...boardState,
      tasks: remainingTasks,
      columns: {
        ...boardState.columns,
        [task.columnId]: {
          ...column,
          taskIds: column.taskIds.filter((id) => id !== taskId),
        },
      },
    });
  };

  const handleEditTask = (updatedTask: Task) => {
    const oldTask = boardState.tasks[updatedTask.id];

    // If column changed, update both columns
    if (oldTask.columnId !== updatedTask.columnId) {
      const oldColumn = boardState.columns[oldTask.columnId];
      const newColumn = boardState.columns[updatedTask.columnId];

      setBoardState({
        ...boardState,
        tasks: {
          ...boardState.tasks,
          [updatedTask.id]: updatedTask,
        },
        columns: {
          ...boardState.columns,
          [oldTask.columnId]: {
            ...oldColumn,
            taskIds: oldColumn.taskIds.filter((id) => id !== updatedTask.id),
          },
          [updatedTask.columnId]: {
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
    const column = boardState.columns[task.columnId];

    setBoardState({
      ...boardState,
      tasks: {
        ...boardState.tasks,
        [taskId]: {
          ...task,
          archived: true,
          archivedAt: new Date().toISOString(),
        },
      },
      columns: {
        ...boardState.columns,
        [task.columnId]: {
          ...column,
          taskIds: column.taskIds.filter((id) => id !== taskId),
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
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
