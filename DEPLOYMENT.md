# Deployment Guide - TaskBreez

## 📦 Deploy to Vercel (Recommended)

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/taskbreez)

### Manual Deployment Steps

1. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/taskbreez.git
   git branch -M main
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Configure (Optional)**
   - Framework Preset: **Next.js**
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

4. **Deploy**
   - Click "Deploy"
   - Your app will be live at `https://your-project.vercel.app`

### Environment Variables

No environment variables required for basic deployment. All features work client-side with localStorage.

## 🚀 Alternative Deployment Options

### Netlify

1. Push code to GitHub
2. Connect repository to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Framework: Next.js

### Static Export (GitHub Pages, etc.)

For pure static deployment:

1. **Update `next.config.js`:**
   ```javascript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   }
   ```

2. **Build:**
   ```bash
   npm run build
   ```

3. **Deploy the `out/` directory**

### Self-Hosted

Run on your own server:

```bash
npm run build
npm start
```

Server will run on port 3000 by default.

## ✅ Pre-Deployment Checklist

- [x] ✓ Production build compiles successfully
- [x] ✓ TypeScript type checking passes
- [x] ✓ ESLint rules pass
- [x] ✓ No console errors in development
- [x] ✓ Git repository initialized
- [x] ✓ All files committed
- [x] ✓ `.gitignore` configured
- [x] ✓ `.vercelignore` configured
- [x] ✓ README documentation complete
- [x] ✓ MIT License included

## 🔧 Build Verification

All checks passed:

```bash
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (4/4)
✓ Finalizing page optimization
```

## 📊 Bundle Size

```
Route (app)                              Size     First Load JS
┌ ○ /                                    20 kB           107 kB
└ ○ /_not-found                          873 B          88.1 kB
+ First Load JS shared by all            87.2 kB
```

Excellent bundle size for fast loading!

## 🎯 Post-Deployment

After deployment:

1. **Test Core Features:**
   - Add tasks
   - Drag and drop between columns
   - Toggle dark mode
   - Search functionality
   - Export JSON

2. **Verify Persistence:**
   - Add tasks, refresh page
   - Tasks should persist via localStorage

3. **Check Responsiveness:**
   - Test on mobile devices
   - Test on tablets
   - Test on desktop

## 🔗 Custom Domain (Vercel)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. SSL certificate auto-generated

## 📈 Analytics (Optional)

Add Vercel Analytics:

```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🐛 Troubleshooting

**Build fails on Vercel:**
- Check Node.js version (18+ required)
- Verify all dependencies are in `package.json`
- Check build logs for specific errors

**Dark mode not working:**
- Ensure JavaScript is enabled
- Check browser localStorage permissions

**Drag and drop issues:**
- Update to latest browser version
- Ensure touch events are supported (mobile)

---

Ready for deployment! 🎉
