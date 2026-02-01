// LocalStorage helper functions with migration path to IndexedDB/Supabase
import { BoardState, ColumnId } from './types';

const STORAGE_KEY = 'tasktide-board-state';
const STORAGE_VERSION = '1.0';

// Initial board state
export const getInitialState = (): BoardState => ({
  tasks: {},
  columns: {
    todo: {
      id: 'todo',
      title: 'To Do',
      taskIds: [],
    },
    inprogress: {
      id: 'inprogress',
      title: 'In Progress',
      taskIds: [],
    },
    done: {
      id: 'done',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['todo', 'inprogress', 'done'],
});

// Load board state from localStorage
export const loadBoardState = (): BoardState | null => {
  if (typeof window === 'undefined') return null;

  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    if (!serialized) return null;

    const data = JSON.parse(serialized);
    
    // Version check for future migrations
    if (data.version !== STORAGE_VERSION) {
      console.warn('Storage version mismatch, using default state');
      return null;
    }

    return data.state;
  } catch (error) {
    console.error('Error loading board state:', error);
    return null;
  }
};

// Save board state to localStorage
export const saveBoardState = (state: BoardState): void => {
  if (typeof window === 'undefined') return;

  try {
    const serialized = JSON.stringify({
      version: STORAGE_VERSION,
      state,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (error) {
    console.error('Error saving board state:', error);
    // Handle quota exceeded error
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.warn('LocalStorage quota exceeded. Consider migrating to IndexedDB.');
      // TODO: Implement automatic migration to IndexedDB when quota exceeded
    }
  }
};

// Clear board state
export const clearBoardState = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
};

// Export board state as JSON
export const exportToJSON = (state: BoardState): string => {
  return JSON.stringify(state, null, 2);
};

// Import board state from JSON
export const importFromJSON = (jsonString: string): BoardState | null => {
  try {
    const state = JSON.parse(jsonString);
    // Validate structure
    if (!state.tasks || !state.columns || !state.columnOrder) {
      throw new Error('Invalid board state structure');
    }
    return state;
  } catch (error) {
    console.error('Error importing board state:', error);
    return null;
  }
};

// Future migration helpers for Supabase/IndexedDB
// TODO: Implement IndexedDB adapter for larger datasets
// TODO: Implement Supabase sync for cloud backup
export const getMigrationStatus = (): {
  storageType: 'localStorage' | 'indexedDB' | 'supabase';
  dataSize: number;
  shouldMigrate: boolean;
} => {
  const currentData = localStorage.getItem(STORAGE_KEY);
  const dataSize = currentData ? new Blob([currentData]).size : 0;
  const MIGRATION_THRESHOLD = 4 * 1024 * 1024; // 4MB

  return {
    storageType: 'localStorage',
    dataSize,
    shouldMigrate: dataSize > MIGRATION_THRESHOLD,
  };
};
