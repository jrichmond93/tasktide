# TaskTide 🌊

A simple, customizable Kanban board web app for personal task management. Built with Next.js, TypeScript, and Tailwind CSS.

![TaskTide](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎯 **Drag & Drop** - Intuitive task movement between columns using @dnd-kit/core
- 📝 **Task Management** - Add, edit, delete, and search tasks with ease
- 🎨 **Dark Mode** - Beautiful dark/light theme toggle with system preference detection
- 💾 **Persistent Storage** - Automatic save to localStorage (migration path to IndexedDB/Supabase ready)
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- 🔍 **Search & Filter** - Quickly find tasks across all columns
- 📤 **Export** - Download your board as JSON for backup
- 💬 **Motivational Quotes** - Daily inspiration (placeholder for API integration)
- ⚡ **Fast & Static** - No backend required, deploy anywhere

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tasktide.git
cd tasktide
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Drag & Drop:** @dnd-kit/core (modern, accessible, performant)
- **Storage:** Browser localStorage (with IndexedDB migration path)
- **Testing:** Jest + React Testing Library
- **Linting:** ESLint + Prettier
- **PDF Export:** jsPDF (coming soon)

## 📁 Project Structure

```
tasktide/
├── app/
│   ├── page.tsx          # Main Kanban board
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── TaskCard.tsx      # Task card component
│   ├── Column.tsx        # Kanban column
│   ├── AddTaskForm.tsx   # Task creation form
│   └── ThemeToggle.tsx   # Dark mode toggle
├── lib/
│   ├── types.ts          # TypeScript interfaces
│   ├── storage.ts        # Storage helpers (localStorage + migration)
│   └── quotes.ts         # Motivational quotes service
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
npm run build
```

The static site will be generated in the `out/` directory.

## 🔮 Future Enhancements

- [ ] **IndexedDB Migration** - Automatic migration when localStorage limit reached
- [ ] **Supabase Integration** - Cloud sync and backup
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

Made with ❤️ by the TaskTide Team
