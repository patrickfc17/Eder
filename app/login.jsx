import { StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../components/Logos/Logo'
import { LoginForm } from '../components/LoginForm'
import { Sugestao } from '../components/Sugestao'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BotaoAzul } from '../components/BotaoAzul'
import { LinearGradient } from 'expo-linear-gradient'
import config from '../styles.config'
import { createContext, useState } from 'react'
import { supabase } from '../src/lib/supabase'
import { useRouter } from 'expo-router'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export const UserContext = createContext()

export default function LoginPage() {
  const router = useRouter()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword(user)

    if (error) {
      return
    }

    router.push('/')
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <LinearGradient
          colors={[lighter, lighter, light]}
          locations={[locations.start, locations.middle, locations.end]}
          style={{
            flex: 1,
          }}>
          <StatusBar barStyle="default" />
          <Logo />
          <View style={styles.form}>
            <UserContext value={[setUser]}>
              <LoginForm />
            </UserContext>
          </View>
          <View style={styles.sugestao}>
            <Sugestao
              message="Não possui conta?"
              goto="Cadastra-se"
              onNavigate={() => {}}
            />
          </View>
          <BotaoAzul texto="Entrar" onPress={handleLogin} />
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
    marginBottom: 12,
  },
  sugestao: {
    alignItems: 'flex-end',
    width: '92%',
  },
})
