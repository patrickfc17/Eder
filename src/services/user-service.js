import { supabase } from '../lib/supabase'

export const register = async user => {
  const { data, error } = await supabase.from('users').insert(user)

  if (error) {
    throw new Error('Erro ao cadastrar usuário: ' + error.message)
  }

  return data
}
