import { createBrowserClient } from '@supabase/ssr';
import type { SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

// Create and export a singleton Supabase client for browser use
// Lazy initialization to prevent errors during build
export const supabase = (() => {
  if (typeof window === 'undefined') {
    // Return a mock client during SSR/build
    return null as any;
  }
  
  if (!supabaseInstance) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!url || !key) {
      console.warn('Supabase URL or key not found. Supabase features will be disabled.');
      return null as any;
    }
    
    supabaseInstance = createBrowserClient(url, key);
  }
  
  return supabaseInstance;
})();
