import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.REACT_APP_API_URL
const supabaseAnonKey = process.env.REACT_APP_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)