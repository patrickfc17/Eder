import { StyleSheet, View, Text } from 'react-native'
import defaults from '../styles.config'

const { lighter, dark, darker } = defaults.colors

export const BotaoMaisPergunta = () => {
  return (
    <View style={styles.label}>
      <View style={styles.botao}>
        <Text style={styles.text}>+ Adicionar pergunta</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 50,
    borderColor: dark,
  },
  botao: {
    flex: 2,
    width: 329,
    height: 44,
    backgroundColor: lighter,
    borderWidth: 1,
    padding: 12,
  },
  text: {
    fontSize: 20,
    color: darker,
    textAlign: 'center',
  },
})
