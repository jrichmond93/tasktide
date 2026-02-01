// Motivational quotes service - placeholder for future API integration
import { MotivationalQuote } from './types';

// Placeholder quotes (will be replaced with API fetch)
const PLACEHOLDER_QUOTES: MotivationalQuote[] = [
  {
    text: 'The only way to do great work is to love what you do.',
    author: 'Steve Jobs',
  },
  {
    text: 'Done is better than perfect.',
    author: 'Sheryl Sandberg',
  },
  {
    text: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  {
    text: 'Focus on being productive instead of busy.',
    author: 'Tim Ferriss',
  },
  {
    text: 'Productivity is never an accident. It is always the result of commitment to excellence.',
    author: 'Paul J. Meyer',
  },
];

// Get random quote from placeholder array
export const getMotivationalQuote = async (): Promise<MotivationalQuote> => {
  // TODO: Replace with actual API call (e.g., quotable.io, zenquotes.io)
  // Example future implementation:
  // try {
  //   const response = await fetch('https://api.quotable.io/random?tags=productivity,motivational');
  //   const data = await response.json();
  //   return { text: data.content, author: data.author };
  // } catch (error) {
  //   console.error('Error fetching quote:', error);
  //   return getPlaceholderQuote();
  // }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getPlaceholderQuote());
    }, 100);
  });
};

// Get random quote from placeholder array (fallback)
const getPlaceholderQuote = (): MotivationalQuote => {
  const randomIndex = Math.floor(Math.random() * PLACEHOLDER_QUOTES.length);
  return PLACEHOLDER_QUOTES[randomIndex];
};

// Cache quote for session
let cachedQuote: MotivationalQuote | null = null;

export const getSessionQuote = async (): Promise<MotivationalQuote> => {
  if (!cachedQuote) {
    cachedQuote = await getMotivationalQuote();
  }
  return cachedQuote;
};

export const refreshQuote = async (): Promise<MotivationalQuote> => {
  cachedQuote = await getMotivationalQuote();
  return cachedQuote;
};
