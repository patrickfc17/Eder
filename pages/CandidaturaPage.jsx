import { ScrollView, StyleSheet, View } from 'react-native'
import { Header } from '../components/Header'
import { CandidaturaForm } from '../components/CandidaturaForm'
import { BotaoAzul } from '../components/BotaoAzul'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export const CandidatarVaga = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <CandidaturaForm />
          <BotaoAzul texto="Enviar"></BotaoAzul>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
