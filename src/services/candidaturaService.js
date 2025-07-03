import { supabase } from '../lib/supabase'

export const fetchCandidatura = async () => {
  let { data: candidaturas } = await supabase.from('candidaturas').select('*')
  console.log('candidaturas', candidaturas)

  return candidaturas
}
