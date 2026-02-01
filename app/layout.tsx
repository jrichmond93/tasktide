import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Task Breezer - Free Kanban Board & Task Management Tool',
  description: 'Organize your tasks with Task Breezer, a free intuitive Kanban board. Drag and drop tasks, set priorities, track deadlines, and sync across devices. Simple project management for individuals and teams.',
  keywords: 'kanban board, task management, todo list, project management, productivity tool, task organizer, free kanban, drag and drop tasks',
  authors: [{ name: 'AI Sure Tech', url: 'https://aisuretech.com' }],
  creator: 'AI Sure Tech',
  publisher: 'AI Sure Tech',
  metadataBase: new URL('https://taskbreezer.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
  openGraph: {
    title: 'Task Breezer - Free Kanban Board & Task Management',
    description: 'Organize tasks efficiently with drag-and-drop Kanban boards, priority levels, and cloud sync.',
    url: 'https://taskbreezer.com',
    siteName: 'Task Breezer',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Task Breezer - Free Kanban Board Task Management Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Task Breezer - Free Kanban Board & Task Management',
    description: 'Organize tasks efficiently with drag-and-drop Kanban boards, priority levels, and cloud sync.',
    images: ['/images/og-image.png'],
    creator: '@aisuretech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Task Breezer',
    description: 'Free Kanban board and task management tool for organizing tasks efficiently',
    url: 'https://taskbreezer.com',
    applicationCategory: 'ProductivityApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    creator: {
      '@type': 'Organization',
      name: 'AI Sure Tech',
      url: 'https://aisuretech.com',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
