import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://zenquotes.io/api/random', {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch quote');
    }
    
    const data = await response.json();
    
    return NextResponse.json({
      text: data[0].q,
      author: data[0].a,
    });
  } catch (error) {
    // Return a fallback quote
    const fallbackQuotes = [
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
    ];
    
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    return NextResponse.json(randomQuote);
  }
}
