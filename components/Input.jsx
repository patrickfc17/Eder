import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import config from '../styles.config'

const { dark, lighter, light } = config.colors
const { darkBox } = config.shadows

export const Input = ({
  label,
  icon,
  placeholder = '',
  multiline = true,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FontAwesome name={icon} size={20} color={dark} />
        <Text style={styles.text}>{label}</Text>
      </View>
      <TextInput
        multiline={multiline}
        style={[styles.input]}
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
    fontWeight: 'normal',
  },
  input: {
    flex: 2,
    width: 329,
    minHeight: 44,
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
