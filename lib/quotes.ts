// Motivational quotes service with real API integration
import { MotivationalQuote } from './types';

// Placeholder quotes (fallback when API fails)
const FALLBACK_QUOTES: MotivationalQuote[] = [
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

// Fetch quote from our Next.js API route (which proxies ZenQuotes)
export const getMotivationalQuote = async (): Promise<MotivationalQuote> => {
  try {
    const response = await fetch('/api/quote');
    
    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data = await response.json();
    
    return {
      text: data.text,
      author: data.author,
    };
  } catch (error) {
    // Silently fall back to placeholder quotes when API is unavailable
    // (This is expected behavior, not an error)
    return getPlaceholderQuote();
  }
};

// Get random quote from fallback array
const getPlaceholderQuote = (): MotivationalQuote => {
  const randomIndex = Math.floor(Math.random() * FALLBACK_QUOTES.length);
  return FALLBACK_QUOTES[randomIndex];
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
