import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import defaults from '../styles.config'

const { lighter, darker } = defaults.colors

export const BotaoAzul = ({ texto, onPress = null, style = null }) => {
  return (
    <View style={styles.label}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.botao, { backgroundColor: darker }, style]}>
        <Text style={styles.texto}>{texto}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botao: {
    padding: 5,
    width: 180,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  texto: {
    color: lighter,
    fontSize: 22,
    fontWeight: 'bold',
  },
})
