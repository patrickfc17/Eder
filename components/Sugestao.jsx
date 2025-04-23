import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import config from '../styles.config'

const { darker, blue } = config.colors

export const Sugestao = ({ message, goto, onNavigate }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity>
        <Text style={styles.goto} onPress={onNavigate}>
          {goto}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 7,
  },
  message: {
    fontSize: 14,
    fontWeight: 'medium',
    color: darker,
  },
  goto: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: blue,
  },
})
