import { Text, StatusBar, StyleSheet, View, ScrollView } from 'react-native'
import { VagaCard } from '../components/Vagas/VagaCard'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import config from '../styles.config'

const { darker } = config.colors

const vagas = [
  {
    id: 1,
    titulo: 'Engenheiro de Software Java Júnior',
    tipo: 'remota',
    empresa: 'BD&D Sistemas de Automação',
    inscricoes: '25/05',
  },
  {
    id: 2,
    titulo: 'Analista de Sistemas PHP Pl/Sr',
    tipo: 'remota',
    empresa: 'Nubank',
    inscricoes: '12/04',
  },
  {
    id: 3,
    titulo: 'Especialista Microsoft - C#/Azure',
    tipo: 'remota',
    empresa: 'Comércio Inteligente Ltda.',
    inscricoes: '23/05',
  },
  {
    id: 4,
    titulo: 'Analista de Suporte Júnior',
    tipo: 'hibrida',
    empresa: 'BD&D Sistemas de Automação',
    inscricoes: '25/06',
  },
  {
    id: 5,
    titulo: 'Cientista de Dados - Python/SQL...',
    tipo: 'presencial',
    empresa: 'C&E Development.',
    inscricoes: '15/05',
  },
  {
    id: 6,
    titulo: 'Engenheiro de Infraestrutura Sê...',
    tipo: 'presencial',
    empresa: 'C&E Development.',
    inscricoes: '22/05',
  },
]

export const HomePage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default" />
        <Text style={styles.title}>Vagas Disponíveis</Text>
        <ScrollView style={styles.vagasListContainer}>
          <View style={styles.vagas}>
            {vagas.map(vaga => (
              <VagaCard key={vaga.id} vaga={vaga} />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 42,
    paddingTop: 42,
  },
  vagasListContainer: {
    height: 700,
  },
  title: {
    fontSize: 40,
    fontWeight: 'black',
    color: darker,
    textAlign: 'center',
  },
  vagas: {
    gap: 32,
    alignItems: 'center',
  },
})
