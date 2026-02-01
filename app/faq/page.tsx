import type { Metadata } from 'next';
import FAQClient from './FAQClient';

export const metadata: Metadata = {
  title: 'FAQ - Task Breezer Help & Support',
  description: 'Find answers to frequently asked questions about Task Breezer. Learn how to create boards, manage tasks, use drag-and-drop, sync data, and more.',
  openGraph: {
    title: 'Task Breezer FAQ',
    description: 'Get help with Task Breezer - answers to common questions',
    type: 'website',
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What is Task Breezer?',
    answer: 'Task Breezer is a simple, customizable Kanban board application for personal task management. It helps you organize tasks across different stages (To Do, In Progress, On Hold, Done) with drag-and-drop functionality.',
  },
  {
    question: 'How do I create a new board?',
    answer: 'After signing in, click the "+ New Board" button on the Boards page. Enter a title, optional description, and choose a color for your board. You can create multiple boards to organize different projects.',
  },
  {
    question: 'How do I add a task?',
    answer: 'Open a board and click the "+ Add Task" button. Fill in the task title, description, due date, priority level, and select which column it should start in. Click "Add Task" to save.',
  },
  {
    question: 'Can I edit or delete tasks?',
    answer: 'Yes! Each task card has edit and delete buttons. Click the edit button to modify task details, or the archive/delete button to remove tasks. Archived tasks can be restored from the Archive page.',
  },
  {
    question: 'How does drag-and-drop work?',
    answer: 'Simply click and hold a task card, then drag it to a different column to change its status. You can move tasks between To Do, In Progress, On Hold, and Done columns.',
  },
  {
    question: 'Is my data saved?',
    answer: 'Yes! When signed in, your boards and tasks are securely stored in Supabase cloud database. If you use the app without signing in, data is stored locally in your browser.',
  },
  {
    question: 'Can I use Task Breezer offline?',
    answer: 'Task Breezer requires an internet connection when signed in to sync with the cloud database. For offline use, you can use the app without signing in, which stores data locally in your browser.',
  },
  {
    question: 'What happens to archived tasks?',
    answer: 'Archived tasks are moved to the Archive page where you can view, restore, or permanently delete them. This helps keep your active boards clean while preserving task history.',
  },
  {
    question: 'How do I change my board settings?',
    answer: 'On the Boards page, click the edit (✏️) button on any board card to modify its title, description, or color. Changes are saved immediately.',
  },
  {
    question: 'Can I share boards with others?',
    answer: 'Currently, Task Breezer is designed for personal use. Board sharing and collaboration features are planned for future updates.',
  },
  {
    question: 'Is Task Breezer free to use?',
    answer: 'Yes! Task Breezer is completely free to use. There are no premium tiers or hidden costs.',
  },
  {
    question: 'How do I reset or delete my account?',
    answer: 'To delete your account and all associated data, please contact us at info@aisuretech.com with your account details.',
  },
];

export default function FAQPage() {
  // Generate FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClient faqs={faqs} />
    </>
  );
}
