import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import config from '../styles.config'

const { dark, lighter, light } = config.colors
const { darkBox } = config.shadows

export const Input = ({
  label,
  icon,
  placeholder = '',
  pickerItems,
  selectedValue,
  onValueChange,
  multiline = false,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FontAwesome name={icon} size={20} color={dark} />
        <Text style={styles.text}>{label}</Text>
      </View>
      {pickerItems ? (
        <Picker
          selectedValue={selectedValue}
          onValueChange={onValueChange}
          style={[styles.input, styles.picker]}
          dropdownIconColor={light}>
          {pickerItems.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      ) : (
        <TextInput
          multiline={multiline}
          numberOfLines={multiline ? 4 : 1}
          maxLength={40}
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={light}
          {...props}
        />
      )}
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
