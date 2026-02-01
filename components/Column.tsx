'use client';

import { ColumnId, Task } from '@/lib/types';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import TaskCard from './TaskCard';

interface ColumnProps {
  column: { id: ColumnId; title: string };
  tasks: Task[];
  onDeleteTask: (taskId: string) => void;
  onEditTask: (taskId: string) => void;
  onArchiveTask: (taskId: string) => void;
}

export default function Column({ column, tasks, onDeleteTask, onEditTask, onArchiveTask }: ColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: column.id,
  });

  // Extract task IDs for SortableContext
  const taskIds = tasks.map(task => task.id);

  // Column-specific empty state content
  const getEmptyStateContent = () => {
    switch (column.id) {
      case 'todo':
        return {
          icon: (
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          ),
          title: 'Ready to start?',
          subtitle: 'Add tasks here to begin',
        };
      case 'inprogress':
        return {
          icon: (
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          ),
          title: 'No active work',
          subtitle: 'Drag tasks here when you start them',
        };
      case 'onhold':
        return {
          icon: (
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'Nothing on hold',
          subtitle: 'Tasks waiting for dependencies go here',
        };
      case 'done':
        return {
          icon: (
            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ),
          title: 'No completed tasks yet',
          subtitle: 'Finished tasks will appear here',
        };
      default:
        return {
          icon: null,
          title: 'Drop tasks here',
          subtitle: '',
        };
    }
  };

  const emptyState = getEmptyStateContent();

  return (
    <div
      ref={setNodeRef}
      className={`bg-gray-100 dark:bg-gray-800 rounded-lg p-4 min-h-[500px] transition-colors ${
        isOver ? 'ring-2 ring-blue-500 bg-blue-50 dark:bg-blue-900/20' : ''
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">{column.title}</h2>
        <span className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium px-2 py-1 rounded-full">
          {tasks.length}
        </span>
      </div>

      <SortableContext items={taskIds} strategy={verticalListSortingStrategy}>
        <div className="space-y-3">
          {tasks.map((task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onDelete={onDeleteTask} 
              onEdit={onEditTask}
              onArchive={onArchiveTask}
            />
          ))}
          {tasks.length === 0 && (
            <div className="text-center py-12 text-gray-400 dark:text-gray-500">
              <div className="flex justify-center mb-3">
                {emptyState.icon}
              </div>
              <p className="font-medium text-gray-500 dark:text-gray-400 mb-1">
                {emptyState.title}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500">
                {emptyState.subtitle}
              </p>
            </div>
          )}
        </div>
      </SortableContext>
    </div>
  );
}
