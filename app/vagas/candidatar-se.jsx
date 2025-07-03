import { ScrollView } from 'react-native'
import { Header } from '../../components/Header'
import { CandidaturaForm } from '../../components/CandidaturaForm'
import { BotaoAzul } from '../../components/BotaoAzul'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useRef } from 'react'
export default function CandidatarVaga() {
  const formRef = useRef()

  const handleEnviar = () => {
    if (formRef.current) {
      formRef.current.submit()
    }
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <CandidaturaForm ref={formRef} />
          <BotaoAzul
            texto="Enviar"
            onPress={handleEnviar}
            style={{ marginTop: 60 }}></BotaoAzul>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
