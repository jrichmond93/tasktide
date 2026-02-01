# Supabase Database Schema

This document describes the database schema for Task Breezer with Supabase.

## Setup Instructions

### 1. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key

### 2. Environment Variables
Create `.env.local` file in project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Run SQL Schema
Execute the following SQL in Supabase SQL Editor:

```sql
-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Boards table
create table boards (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  title text not null,
  description text,
  color text default '#3b82f6',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  is_default boolean default false
);

-- Tasks table
create table tasks (
  id uuid primary key default uuid_generate_v4(),
  board_id uuid references boards(id) on delete cascade not null,
  title text not null,
  description text default '',
  due_date timestamptz,
  priority text check (priority in ('low', 'medium', 'high')) default 'medium',
  column_id text check (column_id in ('todo', 'inprogress', 'onhold', 'done')) not null,
  task_order integer not null default 0,
  archived boolean default false,
  archived_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Board members table (for future sharing feature)
create table board_members (
  id uuid primary key default uuid_generate_v4(),
  board_id uuid references boards(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null,
  role text check (role in ('owner', 'editor', 'viewer')) default 'viewer',
  created_at timestamptz default now(),
  unique(board_id, user_id)
);

-- User profiles table
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  avatar_url text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Indexes for performance
create index boards_user_id_idx on boards(user_id);
create index tasks_board_id_idx on tasks(board_id);
create index tasks_column_id_idx on tasks(column_id);
create index tasks_archived_idx on tasks(archived);
create index board_members_board_id_idx on board_members(board_id);
create index board_members_user_id_idx on board_members(user_id);

-- Row Level Security (RLS) Policies

-- Enable RLS
alter table boards enable row level security;
alter table tasks enable row level security;
alter table board_members enable row level security;
alter table profiles enable row level security;

-- Boards policies
create policy "Users can view their own boards"
  on boards for select
  using (auth.uid() = user_id);

create policy "Users can create their own boards"
  on boards for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own boards"
  on boards for update
  using (auth.uid() = user_id);

create policy "Users can delete their own boards"
  on boards for delete
  using (auth.uid() = user_id);

-- Tasks policies
create policy "Users can view tasks from their boards"
  on tasks for select
  using (
    exists (
      select 1 from boards
      where boards.id = tasks.board_id
      and boards.user_id = auth.uid()
    )
  );

create policy "Users can create tasks in their boards"
  on tasks for insert
  with check (
    exists (
      select 1 from boards
      where boards.id = tasks.board_id
      and boards.user_id = auth.uid()
    )
  );

create policy "Users can update tasks in their boards"
  on tasks for update
  using (
    exists (
      select 1 from boards
      where boards.id = tasks.board_id
      and boards.user_id = auth.uid()
    )
  );

create policy "Users can delete tasks from their boards"
  on tasks for delete
  using (
    exists (
      select 1 from boards
      where boards.id = tasks.board_id
      and boards.user_id = auth.uid()
    )
  );

-- Profiles policies
create policy "Users can view their own profile"
  on profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on profiles for update
  using (auth.uid() = id);

-- Function to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name'
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to auto-create profile
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to auto-update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger update_boards_updated_at before update on boards
  for each row execute procedure update_updated_at_column();

create trigger update_tasks_updated_at before update on tasks
  for each row execute procedure update_updated_at_column();

create trigger update_profiles_updated_at before update on profiles
  for each row execute procedure update_updated_at_column();
```

## Data Migration

When a user logs in for the first time, their localStorage data will be automatically imported:

1. Check if user has any boards in Supabase
2. If no boards exist, create default board
3. Import all tasks from localStorage to the default board
4. Mark localStorage as migrated to prevent duplicate imports

## TypeScript Interfaces

See `lib/types.ts` for database-matching TypeScript interfaces:
- `Board` - Matches boards table
- `Task` - Matches tasks table (with additional client-side fields)
- `Profile` - Matches profiles table
