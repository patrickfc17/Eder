import { StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../components/Logo'
import { LoginForm } from '../components/LoginForm'
import { Sugestao } from '../components/Sugestao'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BotaoAzul } from '../components/BotaoAzul'

export const LoginPage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="default" />
        <Logo />
        <View style={styles.form}>
          <LoginForm />
        </View>
        <View style={styles.sugestao}>
          <Sugestao
            message="Não possui conta?"
            goto="Cadastra-se"
            onNavigate={() => {}}
          />
        </View>
        <BotaoAzul texto="Entrar" />
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
