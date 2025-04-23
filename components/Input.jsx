import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import config from '../styles.config'

const { dark, lighter, light } = config.colors
const { darkBox } = config.shadows

export const Input = ({ label, icon, placeholder = '', ...props }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FontAwesome name={icon} size={20} color={dark} />
        <Text style={styles.text}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={light}
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    height: 79,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  text: {
    fontSize: 20,
    color: dark,
  },
  input: {
    flex: 2,
    width: 329,
    height: 44,
    backgroundColor: dark,
    borderRadius: 6,
    paddingHorizontal: 12,
    color: lighter,
    borderBottomWidth: 1,
    borderBottomColor: light,
    boxShadow: darkBox,
    outlineStyle: 'none',
  },
})
