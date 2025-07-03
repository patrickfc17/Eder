import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import config from '../../styles.config'
import { LogoSimplificada } from './LogoSimplificada'
import { useNavigation } from '@react-navigation/native'

const { lighter, darker } = config.colors

export const Logo = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('index')
  }
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.nome}>Éder</Text>
        <LogoSimplificada />
      </View>
    </TouchableOpacity>
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
