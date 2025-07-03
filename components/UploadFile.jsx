import * as DocumentPicker from 'expo-document-picker'
import { FontAwesome } from '@expo/vector-icons'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import config from '../styles.config'
import { Button } from 'react-native-web'

const { dark, ligther, light } = config.colors
const { darkBox } = config.shadows

export const UploadFile = ({ label, icon, placeholder, ...props }) => {
  const selectFile = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      })
      if (file.type === 'success') {
        console.log(file)
      }
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Usuario cancelou o upload!', error)
      } else {
        console.log(error)
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <FontAwesome name={icon} size={20} color={dark} />
        <Text style={styles.text}>{label}</Text>
      </View>
      <TouchableOpacity style={styles.buttonInput} onPress={selectFile}>
        <Text style={styles.placeholder}>{placeholder}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
    height: 49,
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
  buttonInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 329,
    height: 48,
    backgroundColor: dark,
    borderRadius: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: light,
    shadowColor: darkBox,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  placeholder: {
    color: light,
    fontSize: 16,
  },
})
