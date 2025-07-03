import { FontAwesome } from '@expo/vector-icons'
import RNDateTimePicker from '@react-native-community/datetimepicker'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import config from '../styles.config'

const { dark, lighter, light } = config.colors
const { darkBox } = config.shadows

export const DateInput = ({
  label,
  icon,
  value,
  onDateChange,
  showPicker = false,
  placeholder = '',
  ...props
}) => {
  const fontSize =
    placeholder.length > 30 ? 12 : placeholder.length > 20 ? 14 : 16

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FontAwesome name={icon} size={20} color={dark} />
        <Text style={styles.text}>{label}</Text>
      </View>
      {!!showPicker && (
        <RNDateTimePicker
          mode="date"
          display="spinner"
          value={value}
          onChange={onDateChange}
        />
      )}
      <TextInput
        maxLength={40}
        style={[styles.input, { fontSize }]}
        placeholder={placeholder}
        placeholderTextColor={light}
        value={new Intl.DateTimeFormat('pt-BR').format(new Date(value))}
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
