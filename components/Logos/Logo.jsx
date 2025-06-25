import { StyleSheet, Text, View } from 'react-native'
import config from '../../styles.config'
import { LogoSimplificada } from './LogoSimplificada'

const { lighter, darker } = config.colors

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Éder</Text>
      <LogoSimplificada />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 42,
    justifyContent: 'center',
    gap: 10,
  },
  nome: {
    fontSize: 32,
    color: darker,
    fontWeight: 'semibold',
  },
})
