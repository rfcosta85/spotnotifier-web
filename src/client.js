
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ytemljqkxjaosppjulgb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0ZW1sanFreGphb3NwcGp1bGdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY3NDE4OTcsImV4cCI6MjAzMjMxNzg5N30.J0JlZDlqUJM7L2IUuWasTJayQdvLwi5dOY52fDnnMzA'
export const supabase = createClient(supabaseUrl, supabaseKey)