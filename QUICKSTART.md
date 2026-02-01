# TaskBreez Quick Start Guide

Get TaskBreez up and running in 5 minutes!

## Option 1: Offline Mode (No Setup Required)

Perfect for personal use without cloud features.

```bash
# 1. Install dependencies
npm install

# 2. Start the server
npm run dev

# 3. Open your browser
# Visit http://localhost:3000
```

**That's it!** Start creating tasks immediately. All data saves to your browser's localStorage.

---

## Option 2: With Cloud Features

Enable authentication, multi-board support, and cloud sync.

### Step 1: Set Up Supabase (5 minutes)

1. **Create account:**
   - Visit [supabase.com](https://supabase.com)
   - Click "Start your project"
   - Create a new organization and project

2. **Get your credentials:**
   - Go to Settings > API
   - Copy your project URL
   - Copy your `anon` public API key

3. **Set up database:**
   - Go to SQL Editor
   - Open `SUPABASE_SCHEMA.md` in this project
   - Copy all the SQL
   - Paste in SQL Editor and click "Run"

### Step 2: Configure TaskBreez (1 minute)

```bash
# 1. Copy environment template
cp .env.local.example .env.local

# 2. Edit .env.local and add your Supabase credentials
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# 3. Restart the server
npm run dev
```

### Step 3: Use TaskBreez (1 minute)

1. Open http://localhost:3000
2. Click "Sign In" in the header
3. Click "Sign up" to create an account
4. Your localStorage data will be automatically imported!

---

## Usage Tips

### Keyboard Shortcuts
- **Enter** in title field: Create task quickly
- **Esc**: Close modals
- **Tab**: Navigate form fields

### Best Practices
1. **Use priorities:** Set high/medium/low to organize work
2. **Add due dates:** Keep track of deadlines
3. **Archive completed:** Keep your board clean
4. **Create multiple boards:** Separate work, personal, projects
5. **Export regularly:** Use JSON export as backup

### Task Organization
- **To Do:** Upcoming tasks, not yet started
- **In Progress:** Currently working on
- **Done:** Completed tasks (archive these regularly)

### Board Management (Cloud Mode)
- Create separate boards for different projects
- Use board colors to categorize (work = blue, personal = green, etc.)
- Set one board as default for quick access

---

## Troubleshooting

### "Port 3000 already in use"
```bash
# The app will automatically use port 3001
# Or kill the process on port 3000:
npx kill-port 3000
npm run dev
```

### Tasks not saving
**Offline mode:**
- Check browser console for localStorage errors
- Ensure you're not in private/incognito mode

**Online mode:**
- Verify `.env.local` has correct Supabase credentials
- Check Supabase dashboard is online
- Open browser console to see error messages

### Can't sign up/sign in
- Verify Supabase credentials in `.env.local`
- Run the SQL schema in Supabase (Step 1.3 above)
- Check Supabase dashboard > Authentication is enabled
- Try different email (some email providers block test emails)

### Import not working
- Import only happens on **first login** after signup
- Check if you have data in localStorage before signing up
- Import flag set? Clear it: `localStorage.removeItem('taskbreez-imported')`

---

## What's Next?

### Explore Features
1. Create your first task
2. Drag it to "In Progress"
3. Edit task details
4. Try the search function
5. Toggle dark mode
6. Export your board as JSON
7. Archive completed tasks

### Deploy to Production
See `DEPLOYMENT.md` for detailed deployment guides:
- Vercel (recommended)
- Netlify
- Docker
- Static export

### Customize
- Colors: Edit `tailwind.config.ts`
- Add columns: Update `lib/types.ts` and components
- Change branding: Search and replace "TaskBreez"
- Add features: See `IMPLEMENTATION_SUMMARY.md` for architecture

---

## Quick Reference

### File Locations
- **Tasks data (offline):** Browser localStorage (`taskbreez-board-state`)
- **Tasks data (online):** Supabase database
- **Config:** `.env.local`
- **Schema:** `SUPABASE_SCHEMA.md`

### Key Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run linting
```

### Important URLs
- **Main board:** `/`
- **Archive:** `/archive`
- **Boards list:** `/boards` (requires auth)
- **Individual board:** `/boards/[id]` (requires auth)
- **Login:** `/login`
- **Signup:** `/signup`

---

## Need Help?

- 📧 Email: info@aisuretech.com
- 📖 Full docs: `README.md`
- 🚀 Deployment: `DEPLOYMENT.md`
- 🔍 Implementation: `IMPLEMENTATION_SUMMARY.md`
- 💾 Database: `SUPABASE_SCHEMA.md`

---

**Happy Task Managing! 🌊**
