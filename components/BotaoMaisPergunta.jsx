import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import defaults from '../styles.config'

const { lighter, dark, darker } = defaults.colors

export const BotaoMaisPergunta = ({ onPress }) => {
  return (
    <View style={styles.label}>
      <TouchableOpacity onPress={onPress} style={styles.botao}>
        <Text style={styles.text}>+ Adicionar pergunta</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    alignItems: 'center',
    paddingTop: 50,
    borderColor: dark,
  },
  botao: {
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
