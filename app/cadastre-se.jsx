import { StatusBar, StyleSheet, View } from 'react-native'
import { Logo } from '../components/Logos/Logo'
import { CadastreSeForm } from '../components/CadastreSeForm'
import { Sugestao } from '../components/Sugestao'
import { BotaoAzul } from '../components/BotaoAzul'
import { LinearGradient } from 'expo-linear-gradient'
import config from '../styles.config'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function CadastreSePage() {
  return (
    <LinearGradient
      colors={[lighter, lighter, light]}
      locations={[locations.start, locations.middle, locations.end]}
      style={{ flex: 1 }}>
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
      <View style={styles.botaoCadastreSe}>
        <BotaoAzul texto="Cadastrar-se" />
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
