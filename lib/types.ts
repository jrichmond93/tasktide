// TypeScript interfaces for Task Breezer

export type Priority = 'low' | 'medium' | 'high';
export type ColumnId = 'todo' | 'inprogress' | 'onhold' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  due_date: string | null;
  priority: Priority;
  column_id: ColumnId;
  order: number;
  created_at: string;
  updated_at: string;
  archived: boolean;
  archived_at: string | null;
}

export interface Column {
  id: ColumnId;
  title: string;
  taskIds: string[];
}

export interface BoardState {
  tasks: { [key: string]: Task };
  columns: Record<ColumnId, Column>;
  columnOrder: ColumnId[];
}

// Future migration: Supabase IndexedDB types
export interface StorageAdapter {
  load(): Promise<BoardState | null>;
  save(state: BoardState): Promise<void>;
  clear(): Promise<void>;
}

// Motivational quote placeholder interface
export interface MotivationalQuote {
  text: string;
  author: string;
}

// Supabase database types
export interface Board {
  id: string;
  user_id: string;
  title: string;
  description: string | null;
  color: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface BoardMember {
  id: string;
  board_id: string;
  user_id: string;
  role: 'owner' | 'editor' | 'viewer';
  created_at: string;
}
