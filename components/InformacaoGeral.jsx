import { StyleSheet, Text, View } from 'react-native'
import { tiposVagas } from '../core/enums/vagas'
import { FontAwesome } from '@expo/vector-icons'

export const InformacaoGeral = ({ tipo, icon, message }) => {
  const styles = StyleSheet.create({
    info: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    empresa: {
      fontSize: 10,
      fontWeight: 'semibold',
      color: tiposVagas[tipo],
    },
  })

  return (
    <View style={styles.info}>
      <FontAwesome name={icon} size={14} color={tiposVagas[tipo]} />
      <Text style={styles.empresa}>{message}</Text>
    </View>
  )
}
