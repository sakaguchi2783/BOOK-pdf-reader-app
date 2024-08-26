import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xbzihoszaddciadlhnqj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhiemlob3N6YWRkY2lhZGxobnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg5NDU0MTgsImV4cCI6MjAzNDUyMTQxOH0.VwBIlJqWfwagCDi_eL3vzUu9D-szy05nXbD9JlMTTgE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
