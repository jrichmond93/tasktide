'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import Column from '@/components/Column';
import TaskCard from '@/components/TaskCard';
import AddTaskForm from '@/components/AddTaskForm';
import EditTaskForm from '@/components/EditTaskForm';
import EmptyBoardState from '@/components/EmptyBoardState';
import { supabase } from '@/lib/supabase/client';
import { getMotivationalQuote } from '@/lib/quotes';
import type { Task, ColumnId, MotivationalQuote, Board } from '@/lib/types';

export default function BoardPage() {
  const params = useParams();
  const router = useRouter();
  const boardId = params.boardId as string;

  const [board, setBoard] = useState<Board | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [quote, setQuote] = useState<MotivationalQuote | null>(null);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const columns: { id: ColumnId; title: string }[] = [
    { id: 'todo', title: 'To Do' },
    { id: 'inprogress', title: 'In Progress' },
    { id: 'onhold', title: 'On Hold' },
    { id: 'done', title: 'Done' },
  ];

  useEffect(() => {
    loadBoard();
    loadTasks();
    loadQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boardId]);

  const loadBoard = async () => {
    try {
      const { data, error } = await supabase
        .from('boards')
        .select('*')
        .eq('id', boardId)
        .single();

      if (error) throw error;
      setBoard(data);
    } catch (error) {
      console.error('Error loading board:', error);
      router.push('/boards');
    }
  };

  const loadTasks = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('board_id', boardId)
        .eq('archived', false)
        .order('created_at', { ascending: true });

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error loading tasks:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadQuote = async () => {
    const motivationalQuote = await getMotivationalQuote();
    setQuote(motivationalQuote);
  };

  const handleAddTask = async (newTask: Omit<Task, 'id' | 'created_at' | 'updated_at' | 'order' | 'archived' | 'archived_at'>) => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .insert({
          ...newTask,
          board_id: boardId,
          archived: false,
          archived_at: null,
        })
        .select()
        .single();

      if (error) throw error;
      setTasks([...tasks, data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleEditTask = async (updatedTask: Task) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .update({
          title: updatedTask.title,
          description: updatedTask.description,
          due_date: updatedTask.due_date,
          priority: updatedTask.priority,
          column_id: updatedTask.column_id,
          updated_at: new Date().toISOString(),
        })
        .eq('id', updatedTask.id);

      if (error) throw error;
      setTasks(tasks.map(t => t.id === updatedTask.id ? updatedTask : t));
      setEditingTask(null);
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleArchiveTask = async (taskId: string) => {
    try {
      const { error } = await supabase
        .from('tasks')
        .update({
          archived: true,
          archived_at: new Date().toISOString(),
        })
        .eq('id', taskId);

      if (error) throw error;
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error('Error archiving task:', error);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you want to permanently delete this task?')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId);

      if (error) throw error;
      setTasks(tasks.filter(t => t.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const handleDragStart = (event: DragStartEvent) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const newColumnId = over.id as ColumnId;
    const task = tasks.find((t) => t.id === taskId);

    if (!task || task.column_id === newColumnId) return;

    const updatedTasks = tasks.map((t) =>
      t.id === taskId ? { ...t, column_id: newColumnId } : t
    );

    setTasks(updatedTasks);

    try {
      const { error } = await supabase
        .from('tasks')
        .update({
          column_id: newColumnId,
          updated_at: new Date().toISOString(),
        })
        .eq('id', taskId);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating task:', error);
      setTasks(tasks);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const query = searchQuery.toLowerCase();
    return (
      task.title.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-gray-600 dark:text-gray-400">Loading board...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Link
            href="/boards"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Back to Boards
          </Link>
        </div>
        
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              {board?.title || 'Board'}
            </h1>
            {board?.description && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">{board.description}</p>
            )}
          </div>
          
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
            />
            <button
              onClick={() => setIsAddTaskOpen(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              + Add Task
            </button>
          </div>
        </div>
      </div>

      {/* Motivational Quote */}
      {quote && (
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg border border-blue-200 dark:border-gray-600">
          <p className="text-gray-800 dark:text-gray-200 italic">&quot;{quote.text}&quot;</p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">— {quote.author}</p>
        </div>
      )}

      {/* Kanban Board */}
      {tasks.length === 0 ? (
        <EmptyBoardState 
          onAddTask={() => setIsAddTaskOpen(true)}
          isAuthenticated={true}
        />
      ) : (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((column) => (
              <Column
                key={column.id}
                column={column}
                tasks={filteredTasks.filter((task) => task.column_id === column.id)}
                onEditTask={(taskId) => {
                  const task = tasks.find(t => t.id === taskId);
                  if (task) setEditingTask(task);
                }}
                onArchiveTask={handleArchiveTask}
                onDeleteTask={handleDeleteTask}
              />
            ))}
          </div>
          
          <DragOverlay>
            {activeTask ? <TaskCard task={activeTask} isDragging /> : null}
          </DragOverlay>
        </DndContext>
      )}

      {/* Edit Task Modal */}
      {editingTask && (
        <EditTaskForm
          task={editingTask}
          onSubmit={handleEditTask}
          onClose={() => setEditingTask(null)}
        />
      )}

      {/* Add Task Modal */}
      {isAddTaskOpen && (
        <AddTaskForm
          onSubmit={handleAddTask}
          onClose={() => setIsAddTaskOpen(false)}
        />
      )}
    </div>
  );
}
