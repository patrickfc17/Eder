import { StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../components/Logos/Logo'
import { CadastreSeForm } from '../components/CadastreSeForm'
import { Sugestao } from '../components/Sugestao'
import { BotaoAzul } from '../components/BotaoAzul'
import { LinearGradient } from 'expo-linear-gradient'
import config from '../styles.config'
import { useState } from 'react'
import { UserContext } from './login'
import { useRouter } from 'expo-router'
import { supabase } from '../src/lib/supabase'
import { register } from '../src/services/user-service'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function CadastreSePage() {
  const router = useRouter()

  const [user, setUser] = useState({
    nome: '',
    data_nascimento: new Date(),
    email: '',
    password: '',
  })

  const handleRegister = async () => {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    })

    if (error) {
      console.error('Erro ao cadastrar:', error)
      return
    }

    try {
      await register({
        id: data.user.id,
        nome: user.nome,
        data_nascimento: user.data_nascimento.toISOString().split('T')[0],
      })
    } catch (error) {
      console.error('Erro ao registrar usuário:', error)
      return
    }

    router.push('/')
  }

  return (
    <LinearGradient
      colors={[lighter, lighter, light]}
      locations={[locations.start, locations.middle, locations.end]}
      style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <Logo />
      <View style={styles.form}>
        <UserContext value={[user, setUser]}>
          <CadastreSeForm />
        </UserContext>
      </View>
      <View style={styles.sugestao}>
        <Sugestao
          message="Já está cadastrado?"
          goto="Login"
          onNavigate={() => {}}
        />
      </View>
      <View style={styles.botaoCadastreSe}>
        <BotaoAzul texto="Cadastrar-se" onPress={handleRegister} />
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 38,
    marginBottom: 12,
  },
  sugestao: {
    alignItems: 'flex-end',
    width: '92%',
  },
  botaoCadastreSe: {
    marginTop: 16,
  },
})
