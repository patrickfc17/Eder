import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, TextInput, View } from 'react-native'
import config from '../styles.config'

const { darker } = config.colors
const { darkBox } = config.shadows

export const BarraPesquisa = () => {
  return (
    <View style={styles.search}>
      <FontAwesome name="search" size={28} color={darker} />
      <TextInput style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
  search: {
    width: 248,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: darker,
    boxShadow: darkBox,
    borderRadius: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexGrow: 1,
    flexShrink: 0,
  },
  input: {
    width: 196,
    height: '100%',
    outlineStyle: 'none',
    color: darker,
    fontSize: 18,
  },
})
