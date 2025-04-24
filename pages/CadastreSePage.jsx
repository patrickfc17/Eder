import { StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../components/Logo'
import { CadastreSeForm } from '../components/CadastreSeForm'
import { Sugestao } from '../components/Sugestao'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BotaoCadastrar } from '../components/BotaoAzul'

export const CadastreSePage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle="default" />
        <Logo />
        <View style={styles.form}>
          <CadastreSeForm />
        </View>
        <View style={styles.sugestao}>
          <Sugestao
            message="Já está cadastrado?"
            goto="Login"
            onNavigate={() => {}}
          />
        </View>
        <View>
          <BotaoCadastrar texto="Cadastrar-se" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
})
