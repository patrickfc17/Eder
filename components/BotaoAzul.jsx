import { StyleSheet, View, Text } from 'react-native'
import defaults from '../styles.config'

const { lighter, dark, darker } = defaults.colors

export const BotaoAzul = ({ texto }) => {
  return (
    <View style={styles.label}>
      <View style={styles.botao}>
        <Text style={styles.texto}>{texto}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
  },
  botao: {
    flex: 1,
    width: 150,
    backgroundColor: darker,
    borderRadius: 10,
    borderBottomWidth: 1,
    padding: 8,
  },
  texto: {
    fontSize: 20,
    color: lighter,
    textAlign: 'center',
  },
})
