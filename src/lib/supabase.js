import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage'

const supabaseUrl = 'https://rhxpuqwxzlfzunfmbiky.supabase.co'
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJoeHB1cXd4emxmenVuZm1iaWt5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5NDM0NzcsImV4cCI6MjA2MzUxOTQ3N30.lRp7rfxUEwJKH4uzl0Qj_Bd7uraw0jL0YnMnOpu27x0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
