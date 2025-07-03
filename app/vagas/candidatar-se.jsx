import { ScrollView } from 'react-native'
import { Header } from '../../components/Header'
import { CandidaturaForm } from '../../components/CandidaturaForm'
import { BotaoAzul } from '../../components/BotaoAzul'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useRef } from 'react'
import config from '../../styles.config'
import { LinearGradient } from 'expo-linear-gradient'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function CandidatarVaga() {
  const formRef = useRef()

  const handleEnviar = () => {
    if (formRef.current) {
      formRef.current.submit()
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={[lighter, lighter, light]}
          locations={[locations.start, locations.middle, locations.end]}
          style={{ flex: 1 }}>
          <ScrollView>
            <Header />
            <CandidaturaForm ref={formRef} />
            <BotaoAzul
              texto="Enviar"
              onPress={handleEnviar}
              style={{ marginTop: 60 }}></BotaoAzul>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
