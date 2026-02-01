'use client';

import { useState, useEffect } from 'react';
import { Task, BoardState } from '@/lib/types';
import { loadBoardState, saveBoardState } from '@/lib/storage';
import { supabase } from '@/lib/supabase/client';
import TaskCard from '@/components/TaskCard';

export default function ArchivePage() {
  const [boardState, setBoardState] = useState<BoardState | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    checkAuthAndLoadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAuthAndLoadTasks = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);

    if (session) {
      // Load from Supabase
      await loadFromSupabase();
    } else {
      // Load from localStorage
      const savedState = loadBoardState();
      if (savedState) {
        setBoardState(savedState);
      }
    }
    setLoading(false);
  };

  const loadFromSupabase = async () => {
    try {
      const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .eq('archived', true)
        .order('archived_at', { ascending: false });

      if (error) throw error;
      setTasks(data || []);
    } catch (error) {
      console.error('Error loading archived tasks:', error);
    }
  };

  const handleUnarchiveTask = async (taskId: string) => {
    if (isAuthenticated) {
      // Update in Supabase
      try {
        const { error } = await supabase
          .from('tasks')
          .update({
            archived: false,
            archived_at: null,
            updated_at: new Date().toISOString(),
          })
          .eq('id', taskId);

        if (error) throw error;
        setTasks(tasks.filter(t => t.id !== taskId));
      } catch (error) {
        console.error('Error unarchiving task:', error);
      }
    } else {
      // Update localStorage
      if (!boardState) return;

      const task = boardState.tasks[taskId];
      const column = boardState.columns[task.column_id];

      const updatedState = {
        ...boardState,
        tasks: {
          ...boardState.tasks,
          [taskId]: {
            ...task,
            archived: false,
            archived_at: null,
          },
        },
        columns: {
          ...boardState.columns,
          [task.column_id]: {
            ...column,
            taskIds: [...column.taskIds, taskId],
          },
        },
      };

      setBoardState(updatedState);
      saveBoardState(updatedState);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Are you sure you want to permanently delete this task?')) {
      return;
    }

    if (isAuthenticated) {
      // Delete from Supabase
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
    } else {
      // Delete from localStorage
      if (!boardState) return;

      const { [taskId]: deleted, ...remainingTasks } = boardState.tasks;

      const updatedState = {
        ...boardState,
        tasks: remainingTasks,
      };

      setBoardState(updatedState);
      saveBoardState(updatedState);
    }
  };

  if (!mounted || loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-gray-600 dark:text-gray-400">Loading archived tasks...</div>
      </div>
    );
  }

  // Get archived tasks based on auth state
  const archivedTasks = isAuthenticated
    ? tasks.filter((task) => 
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : boardState
    ? Object.values(boardState.tasks)
        .filter((task) => task.archived)
        .filter((task) => 
          task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          task.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => {
          const dateA = new Date(a.archived_at || 0).getTime();
          const dateB = new Date(b.archived_at || 0).getTime();
          return dateB - dateA;
        })
    : [];

  return (
    <div className="min-h-[calc(100vh-16rem)] bg-gray-50 dark:bg-gray-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Archive</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {archivedTasks.length} archived {archivedTasks.length === 1 ? 'task' : 'tasks'}
              </p>
            </div>
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search archived tasks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Archived Tasks Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {archivedTasks.length === 0 ? (
          <div className="text-center py-16">
            <svg
              className="mx-auto h-16 w-16 text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              />
            </svg>
            <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
              No Archived Tasks
            </h3>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {searchTerm ? 'No archived tasks match your search.' : 'Tasks you archive will appear here.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {archivedTasks.map((task) => (
              <div key={task.id} className="relative group">
                <TaskCard task={task} />
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleUnarchiveTask(task.id)}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                    title="Restore task"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      if (confirm('Permanently delete this task? This cannot be undone.')) {
                        handleDeleteTask(task.id);
                      }
                    }}
                    className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-lg"
                    title="Delete permanently"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
                {task.archived_at && (
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    Archived {new Date(task.archived_at).toLocaleDateString()}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
