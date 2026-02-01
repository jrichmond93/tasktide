# TaskBreez 🌊

A modern, feature-rich Kanban board application built with Next.js 14, TypeScript, and Tailwind CSS. TaskBreez supports both offline (localStorage) and online (Supabase) modes with seamless data synchronization.

![TaskBreez](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### Core Features
- 🎯 **Drag & Drop** - Intuitive task movement between columns using @dnd-kit/core
- ✏️ **Task Management** - Create, edit, delete, and archive tasks with full CRUD operations
- 🗂️ **Archive System** - Dedicated archive page to view, restore, or permanently delete archived tasks
- 🎨 **Dark Mode** - Beautiful dark/light theme toggle with system preference detection
- 💾 **Offline First** - Works without internet using browser localStorage
- 📱 **Responsive Design** - Seamless experience on desktop, tablet, and mobile
- 🔍 **Search & Filter** - Quickly find tasks across all columns and archives
- 📤 **Export** - Download your board as JSON for backup
- 💬 **Motivational Quotes** - Daily inspiration from Quotable.io API

### Cloud Features (with Supabase)
- 👤 **User Authentication** - Secure sign up, sign in, and session management
- 📊 **Multi-Board Support** - Create and manage multiple boards per user
- ☁️ **Cloud Sync** - Access your tasks from any device
- 🔄 **Auto-Import** - Automatically import localStorage data on first login
- 🔒 **Row-Level Security** - Secure data access with Supabase RLS policies
- 🌐 **Team Ready** - Infrastructure for future board sharing features

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- (Optional) Supabase account for cloud features

### Quick Start (Offline Mode)

1. Clone the repository:
```bash
git clone https://github.com/yourusername/taskbreez.git
cd taskbreez
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) - start using TaskBreez immediately!

All your data is stored locally in your browser. No account needed!

### Supabase Setup (Optional - for Cloud Features)

To enable authentication, multi-board support, and cloud sync:

1. **Create a Supabase Project:**
   - Visit [supabase.com](https://supabase.com)
   - Click "New Project"
   - Note your project URL and anon key from Settings > API

2. **Set Up the Database:**
   - Open SQL Editor in your Supabase dashboard
   - Copy the SQL script from `SUPABASE_SCHEMA.md`
   - Execute the script to create tables, policies, and triggers

3. **Configure Environment Variables:**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` and add:
   ```
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Restart the Server:**
   ```bash
   npm run dev
   ```

5. **Sign Up and Import:**
   - Click "Sign In" in the header
   - Create a new account
   - Your localStorage data will be automatically imported!

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript 5.4 (strict mode)
- **Styling:** Tailwind CSS 3.4
- **Drag & Drop:** @dnd-kit/core 6.1.0
- **Authentication:** Supabase Auth (@supabase/ssr)
- **Database:** PostgreSQL via Supabase
- **API Integration:** Quotable.io for motivational quotes
- **State Management:** React useState/useEffect
- **Storage:** Browser localStorage + Supabase (hybrid mode)
- **Storage:** Browser localStorage (with IndexedDB migration path)
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint + Prettier
- **PDF Export:** jsPDF (coming soon)

## 📁 Project Structure

```
taskbreez/
├── app/
│   ├── page.tsx          # Main Kanban board
│   ├── archive/          # Archived tasks page
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── privacy/          # Privacy policy
│   ├── layout.tsx        # Root layout with Header/Footer
│   └── globals.css       # Global styles
├── components/
│   ├── TaskCard.tsx      # Task card component
│   ├── Column.tsx        # Kanban column
│   ├── AddTaskForm.tsx   # Task creation form
│   ├── EditTaskForm.tsx  # Task editing form
│   ├── ThemeToggle.tsx   # Dark mode toggle
│   ├── Header.tsx        # Global navigation header
│   └── Footer.tsx        # Global footer
├── lib/
│   ├── types.ts          # TypeScript interfaces
│   ├── storage.ts        # Storage helpers (localStorage + Supabase ready)
│   └── quotes.ts         # Motivational quotes service (Quotable API)
├── tests/
│   └── TaskCard.test.tsx # Component tests
└── public/               # Static assets
```

## 🧪 Testing

Run tests:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

## 🎨 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Lint code with ESLint
- `npm run format` - Format code with Prettier
- `npm test` - Run tests

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Static Export

```bash
npm run Supabase Integration** - Cloud sync, authentication, and multi-user support
- [ ] **Multiple Boards** - Create and manage multiple project boards
- [ ] **IndexedDB Migration** - Automatic migration when localStorage limit reached
- [ ] **PDF Export** - Export board as formatted PDF
- [ ] **Due Date Notifications** - Browser notifications for overdue tasks
- [ ] **Subtasks** - Break down tasks into smaller pieces
- [ ] **Tags/Labels** - Categorize tasks with custom tags
- [ ] **Collaboration** - Share boards with team memberc and backup
- [ ] **Motivational Quotes API** - Real-time quotes from external API
- [ ] **PDF Export** - Export board as formatted PDF
- [ ] **Task Editing** - Edit existing tasks
- [ ] **Due Date Notifications** - Browser notifications for overdue tasks
- [ ] **Subtasks** - Break down tasks into smaller pieces
- [ ] **Tags/Labels** - Categorize tasks with custom tags
- [ ] **Archive** - Archive completed tasks

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/amazing-feature`
3. Commit your changes: `git commit -m 'feat: add amazing feature'`
4. Push to the branch: `git push origin feat/amazing-feature`
5. Open a Pull Request

### Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by popular Kanban tools like Trello and Linear
- Built with modern web technologies for optimal performance
- Designed for simplicity and ease of use

---

Made with ❤️ by the TaskBreez Team
