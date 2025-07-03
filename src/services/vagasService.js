import { supabase } from '../lib/supabase'

export const fetchVagas = async () => {
  let { data: vagas } = await supabase.from('vagas').select('*')
  console.log('vagas', vagas)

  return vagas
}
