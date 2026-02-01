import { render, screen } from '@testing-library/react';
import TaskCard from '@/components/TaskCard';
import { Task } from '@/lib/types';

describe('TaskCard', () => {
  const mockTask: Task = {
    id: 'task-1',
    title: 'Test Task',
    description: 'This is a test task',
    due_date: '2026-02-15',
    priority: 'high',
    column_id: 'todo',
    order: 0,
    created_at: '2026-02-01T00:00:00.000Z',
    updated_at: '2026-02-01T00:00:00.000Z',
    archived: false,
    archived_at: null,
  };

  it('renders task title correctly', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('Test Task')).toBeInTheDocument();
  });

  it('renders task description', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('This is a test task')).toBeInTheDocument();
  });

  it('displays priority badge', () => {
    render(<TaskCard task={mockTask} />);
    expect(screen.getByText('high')).toBeInTheDocument();
  });

  it('calls onDelete when delete button is clicked', () => {
    const handleDelete = jest.fn();
    render(<TaskCard task={mockTask} onDelete={handleDelete} />);
    
    const deleteButton = screen.getByLabelText('Delete task');
    deleteButton.click();
    
    expect(handleDelete).toHaveBeenCalledWith('task-1');
  });
});
