import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InformacaoGeral } from '../InformacaoGeral'
import { stylesVagaCard } from './vaga-card.style'
import { useRouter } from 'expo-router'

export const VagaCard = ({ vaga }) => {
  const router = useRouter()

  const { tipo } = vaga

  const styles = StyleSheet.create(stylesVagaCard(tipo))

  return (
    <View style={styles.container}>
      <View style={styles.semicircle}></View>
      <View style={styles.content}>
        <Text style={styles.titulo}>{vaga.titulo}</Text>
        <View style={styles.main}>
          <View style={styles.informacoesGerais}>
            <InformacaoGeral
              tipo={tipo}
              icon="building"
              message={vaga.empresa}
            />
            <InformacaoGeral
              tipo={tipo}
              icon="calendar"
              message={`Inscrições até: ${vaga.inscricoes}`}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push(`/vagas/${vaga.id}`)}>
            <View>
              <Text style={styles.verMais}>Ver Mais</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
