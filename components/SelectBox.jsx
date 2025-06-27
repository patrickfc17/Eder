import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { FontAwesome } from '@expo/vector-icons'
import config from '../styles.config'

const { dark, lighter, light } = config.colors
const { darkBox } = config.shadows

export const SelectBox = ({
  label = '',
  icon = '',
  value,
  onChange,
  items = [],
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FontAwesome name={icon} size={20} color={dark}></FontAwesome>
        <Text style={[styles.text]}>{label}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={value}
          onValueChange={onChange}
          style={styles.picker}
          dropdownIconColor={lighter}
          styles={styles.inputContainer}>
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
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
    fontSize: 16,
    color: dark,
    fontWeight: 'normal',
  },
  inputContainer: {
    flex: 2,
    width: 329,
    height: 44,
    backgroundColor: dark,
    borderRadius: 6,
    color: lighter,
    borderBottomWidth: 1,
    borderBottomColor: light,
    boxShadow: darkBox,
    outlineStyle: 'none',
  },
  picker: {
    height: 'auto',
    color: lighter,
  },
})
