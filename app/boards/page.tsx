'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/lib/supabase/client';
import type { Board } from '@/lib/types';

export default function BoardsPage() {
  const [boards, setBoards] = useState<Board[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingBoard, setEditingBoard] = useState<Board | null>(null);
  const [newBoardTitle, setNewBoardTitle] = useState('');
  const [newBoardDescription, setNewBoardDescription] = useState('');
  const [newBoardColor, setNewBoardColor] = useState('#3b82f6');
  const [creating, setCreating] = useState(false);
  const [updating, setUpdating] = useState(false);
  const router = useRouter();

  useEffect(() => {
    loadBoards();
    checkAndAutoImport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadBoards = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('boards')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBoards(data || []);
    } catch (error) {
      console.error('Error loading boards:', error);
    } finally {
      setLoading(false);
    }
  };

  const checkAndAutoImport = async () => {
    // Check if this is the first login and auto-import localStorage data
    const hasImported = localStorage.getItem('taskbreezer-imported');
    if (hasImported) return;

    const localData = localStorage.getItem('taskbreezer-board-state');
    if (!localData) {
      localStorage.setItem('taskbreezer-imported', 'true');
      return;
    }

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Check if user already has boards
      const { data: existingBoards } = await supabase
        .from('boards')
        .select('id')
        .eq('user_id', user.id)
        .limit(1);

      if (existingBoards && existingBoards.length > 0) {
        localStorage.setItem('taskbreez-imported', 'true');
        return;
      }

      // Import localStorage data
      const boardState = JSON.parse(localData);
      
      // Create default board
      const { data: newBoard, error: boardError } = await supabase
        .from('boards')
        .insert({
          user_id: user.id,
          title: 'My Board',
          description: 'Imported from local storage',
          color: '#3b82f6',
          is_default: true,
        })
        .select()
        .single();

      if (boardError) throw boardError;

      // Import tasks
      const tasksToImport = Object.values(boardState.tasks).map((task: any) => ({
        board_id: newBoard.id,
        title: task.title,
        description: task.description,
        due_date: task.dueDate,
        priority: task.priority,
        column_id: task.columnId,
        archived: task.archived || false,
        archived_at: task.archivedAt,
      }));

      if (tasksToImport.length > 0) {
        const { error: tasksError } = await supabase
          .from('tasks')
          .insert(tasksToImport);

        if (tasksError) throw tasksError;
      }

      localStorage.setItem('taskbreez-imported', 'true');
      await loadBoards();
    } catch (error) {
      console.error('Error auto-importing:', error);
    }
  };

  const handleCreateBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreating(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from('boards')
        .insert({
          user_id: user.id,
          title: newBoardTitle,
          description: newBoardDescription || null,
          color: newBoardColor,
          is_default: boards.length === 0,
        })
        .select()
        .single();

      if (error) throw error;

      setBoards([data, ...boards]);
      setShowCreateModal(false);
      setNewBoardTitle('');
      setNewBoardDescription('');
      setNewBoardColor('#3b82f6');
      router.push(`/boards/${data.id}`);
    } catch (error) {
      console.error('Error creating board:', error);
    } finally {
      setCreating(false);
    }
  };

  const handleUpdateBoard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBoard) return;
    
    setUpdating(true);

    try {
      const { data, error } = await supabase
        .from('boards')
        .update({
          title: newBoardTitle,
          description: newBoardDescription || null,
          color: newBoardColor,
        })
        .eq('id', editingBoard.id)
        .select()
        .single();

      if (error) throw error;

      setBoards(boards.map(b => b.id === editingBoard.id ? data : b));
      setShowEditModal(false);
      setEditingBoard(null);
      setNewBoardTitle('');
      setNewBoardDescription('');
      setNewBoardColor('#3b82f6');
    } catch (error) {
      console.error('Error updating board:', error);
    } finally {
      setUpdating(false);
    }
  };

  const handleDeleteBoard = async (boardId: string) => {
    if (!confirm('Are you sure you want to delete this board? All tasks will be permanently deleted.')) {
      return;
    }

    try {
      const { error } = await supabase
        .from('boards')
        .delete()
        .eq('id', boardId);

      if (error) throw error;
      setBoards(boards.filter(b => b.id !== boardId));
    } catch (error) {
      console.error('Error deleting board:', error);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="text-gray-600 dark:text-gray-400">Loading boards...</div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Boards</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            + New Board
          </button>
          <button
            onClick={handleSignOut}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      {boards.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            You don&apos;t have any boards yet. Create your first board to get started!
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            Create Your First Board
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boards.map((board) => (
            <div
              key={board.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-t-4"
              style={{ borderTopColor: board.color }}
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {board.title}
                </h2>
                {board.is_default && (
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded">
                    Default
                  </span>
                )}
              </div>
              
              {board.description && (
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {board.description}
                </p>
              )}

              <div className="flex gap-2 mt-4">
                <Link
                  href={`/boards/${board.id}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-md transition-colors"
                >
                  Open Board
                </Link>
                <button
                  onClick={() => {
                    setEditingBoard(board);
                    setNewBoardTitle(board.title);
                    setNewBoardDescription(board.description || '');
                    setNewBoardColor(board.color);
                    setShowEditModal(true);
                  }}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
                  title="Edit board"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDeleteBoard(board.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors"
                  title="Delete board"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Board Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Create New Board
            </h2>
            
            <form onSubmit={handleCreateBoard} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Board Title *
                </label>
                <input
                  id="title"
                  type="text"
                  value={newBoardTitle}
                  onChange={(e) => setNewBoardTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="My Project"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={newBoardDescription}
                  onChange={(e) => setNewBoardDescription(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Optional description..."
                />
              </div>

              <div>
                <label htmlFor="color" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Color
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    id="color"
                    type="color"
                    value={newBoardColor}
                    onChange={(e) => setNewBoardColor(e.target.value)}
                    className="h-10 w-20 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{newBoardColor}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateModal(false);
                    setNewBoardTitle('');
                    setNewBoardDescription('');
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={creating || !newBoardTitle.trim()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md transition-colors"
                >
                  {creating ? 'Creating...' : 'Create Board'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Board Modal */}
      {showEditModal && editingBoard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Edit Board
            </h2>
            
            <form onSubmit={handleUpdateBoard} className="space-y-4">
              <div>
                <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Board Title *
                </label>
                <input
                  id="edit-title"
                  type="text"
                  value={newBoardTitle}
                  onChange={(e) => setNewBoardTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="My Project"
                />
              </div>

              <div>
                <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  id="edit-description"
                  value={newBoardDescription}
                  onChange={(e) => setNewBoardDescription(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                  placeholder="Optional description..."
                />
              </div>

              <div>
                <label htmlFor="edit-color" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Color
                </label>
                <div className="flex gap-2 items-center">
                  <input
                    id="edit-color"
                    type="color"
                    value={newBoardColor}
                    onChange={(e) => setNewBoardColor(e.target.value)}
                    className="h-10 w-20 cursor-pointer"
                  />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{newBoardColor}</span>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingBoard(null);
                    setNewBoardTitle('');
                    setNewBoardDescription('');
                    setNewBoardColor('#3b82f6');
                  }}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-4 py-2 rounded-md transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={updating || !newBoardTitle.trim()}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-4 py-2 rounded-md transition-colors"
                >
                  {updating ? 'Updating...' : 'Update Board'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
