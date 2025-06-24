import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import defaults from '../styles.config'

const { lighter, dark, darker } = defaults.colors

export const BotaoMaisPergunta = () => {
  return (
    <View style={styles.label}>
      <TouchableOpacity onPress={() => ''} style={styles.botao}>
        <Text style={styles.text}>+ Adicionar pergunta</Text>
      </TouchableOpacity>
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
    width: 310,
    height: 43,
    backgroundColor: lighter,
    borderWidth: 2,
    borderRadius: 6,
  },
  text: {
    padding: 5,
    fontSize: 20,
    color: darker,
    textAlign: 'center',
  },
})
