import { View, Text, StyleSheet } from 'react-native'
import config from '../styles.config'

const { darker } = config.colors

export const Form = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputs}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: darker,
    textAlign: 'center',
  },
  inputs: {
    alignItems: 'center',
    gap: 24,
  },
})
