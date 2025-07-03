import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Badge } from '../../../components/Bagde'
import { Header } from '../../../components/Header'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { BotaoAzul } from '../../../components/BotaoAzul'
import config from '../../../styles.config'
import { LinearGradient } from 'expo-linear-gradient'
import { useGlobalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { fetchVaga } from '../../../src/services/vagasService'

const { dark, lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

const modelos = {
  remota: 'Remota',
  presencial: 'Presencial',
  hibrida: 'Híbrida',
}

const periodos = {
  integral: 'Tempo Integral',
  estagio: 'Estágio',
  'meio-periodo': 'Meio Período',
  freelance: 'Freelance',
  trainee: 'Trainee',
}

export default function DescricaoVaga() {
  const [vaga, setVaga] = useState({})
  const { id } = useGlobalSearchParams()

  const loadVaga = async () => {
    const vaga = await fetchVaga(id)

    setVaga(vaga)
  }

  useEffect(() => {
    loadVaga()
  }, [])

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={[lighter, lighter, light]}
          locations={[locations.start, locations.middle, locations.end]}
          style={{ flex: 1 }}>
          <Header />
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.badgesContainer}>
              <Badge text={modelos[vaga.modelo]} />
              <Badge text={periodos[vaga.periodo]} />
            </View>
            <View style={styles.descricaoContainer}>
              <Text style={styles.titulo}>{vaga.titulo}</Text>
              <Text style={styles.texto}>{vaga.descricao}</Text>
              <Text style={styles.texto}>Empresa: {vaga.empresa}</Text>
              <Text style={styles.texto}>Área: {vaga.area}</Text>
              <Text style={styles.texto}>
                Inscrições: {vaga.data_conclusao}
              </Text>
            </View>
            <BotaoAzul texto="Candidatar-se" />
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  badgesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginTop: 40,
  },
  descricaoContainer: {
    gap: 12,
    marginBottom: 60,
  },
  titulo: {
    fontSize: 32,
    marginTop: 12,
    color: dark,
  },
  texto: {
    fontSize: 18,
    lineHeight: 20,
    color: dark,
  },
})
