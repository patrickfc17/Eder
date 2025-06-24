import { ScrollView } from 'react-native'
import { Header } from '../components/Header'
import { CadastrarVagaForm } from '../components/CadastrarVagaForm'
import { BotaoMaisPergunta } from '../components/BotaoMaisPergunta'
import { BotaoAzul } from '../components/BotaoAzul'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export const CadastrarVaga = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <Header />
          <CadastrarVagaForm />
          <BotaoMaisPergunta />
          <BotaoAzul texto="Cadastrar"></BotaoAzul>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
