import { supabase } from '../lib/supabase'

export const fetchVagas = async () => {
  let { data: vagas } = await supabase.from('vagas').select('*')

  return vagas
}

export const fetchVaga = async id => {
  const { data: vaga, error } = await supabase
    .from('vagas')
    .select('')
    .eq('id', id)
    .single()

  return vaga
}
