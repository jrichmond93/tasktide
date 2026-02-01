// TypeScript interfaces for TaskTide

export type Priority = 'low' | 'medium' | 'high';
export type ColumnId = 'todo' | 'inprogress' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  priority: Priority;
  columnId: ColumnId;
  order: number;
  createdAt: string;
  updatedAt: string;
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
