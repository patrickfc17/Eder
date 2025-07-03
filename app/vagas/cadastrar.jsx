import { ScrollView } from 'react-native'
import { Header } from '../../components/Header'
import { CadastrarVagaForm } from '../../components/CadastrarVagaForm'
import { BotaoAzul } from '../../components/BotaoAzul'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient'
import { useRef } from 'react'
import config from '../../styles.config'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function CadastrarVaga() {
  const formRef = useRef(null)
  const handleCadastrar = () => {
    formRef.current?.handleSubmit()
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <LinearGradient
          colors={[lighter, lighter, light]}
          locations={[locations.start, locations.middle, locations.end]}>
          <ScrollView>
            <Header />
            <CadastrarVagaForm ref={formRef} />
            <BotaoAzul texto="Cadastrar" onPress={handleCadastrar}></BotaoAzul>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
