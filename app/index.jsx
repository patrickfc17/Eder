import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native'
import { VagaCard } from '../components/Vagas/VagaCard'
import config from '../styles.config'
import { BarraPesquisa } from '../components/BarraPesquisa'
import { Header } from '../components/Header'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { fetchVagas } from '../src/services/vagasService'

const { darker, lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

// const vagas = [
//   {
//     id: 1,
//     titulo: 'Engenheiro de Software Java Júnior',
//     tipo: 'remota',
//     empresa: 'BD&D Sistemas de Automação',
//     inscricoes: '25/05',
//   },
//   {
//     id: 2,
//     titulo: 'Analista de Sistemas PHP Pl/Sr',
//     tipo: 'remota',
//     empresa: 'Nubank',
//     inscricoes: '12/04',
//   },
//   {
//     id: 3,
//     titulo: 'Especialista Microsoft - C#/Azure',
//     tipo: 'remota',
//     empresa: 'Comércio Inteligente Ltda.',
//     inscricoes: '23/05',
//   },
//   {
//     id: 4,
//     titulo: 'Analista de Suporte Júnior',
//     tipo: 'hibrida',
//     empresa: 'BD&D Sistemas de Automação',
//     inscricoes: '25/06',
//   },
//   {
//     id: 5,
//     titulo: 'Cientista de Dados - Python/SQL...',
//     tipo: 'presencial',
//     empresa: 'C&E Development.',
//     inscricoes: '15/05',
//   },
//   {
//     id: 6,
//     titulo: 'Engenheiro de Infraestrutura Sê...',
//     tipo: 'presencial',
//     empresa: 'C&E Development.',
//     inscricoes: '22/05',
//   },
// ]

export default function HomePage() {
  const [vagas, setVagas] = useState([])

  const router = useRouter()

  const loadVagas = async () => {
    try {
      const vagas = await fetchVagas()
      console.log(vagas)

      setVagas(
        vagas.map(vaga => ({
          id: vaga.id,
          titulo: vaga.titulo,
          tipo: vaga.modelo,
          empresa: vaga.empresa,
          inscricoes: vaga.data_conclusao,
        })),
      )
    } catch (error) {
      console.error('Erro ao carregar vagas:', error)
      return
    }
  }

  useEffect(() => {
    loadVagas()
  }, [])

  return (
    <LinearGradient
      colors={[lighter, lighter, light]}
      locations={[locations.start, locations.middle, locations.end]}
      style={{ flex: 1 }}>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View style={styles.container}>
          <Header>
            <BarraPesquisa />
          </Header>
          <Text style={styles.title}>Vagas Disponíveis</Text>
          <FlatList
            data={vagas}
            renderItem={({ item }) => <VagaCard vaga={item} />}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.vagas}
          />
        </View>
      </ScrollView>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 42,
    paddingVertical: 16,
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
