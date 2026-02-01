import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TaskTide - Kanban Board',
  description: 'Simple, customizable Kanban board for personal task management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
