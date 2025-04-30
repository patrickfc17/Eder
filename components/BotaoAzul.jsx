import { StyleSheet, View, Button } from 'react-native'
import defaults from '../styles.config'

const { lighter, dark, darker } = defaults.colors

export const BotaoAzul = ({ texto }) => {
  return (
    <View style={styles.label}>
      <Button
        title={texto}
        onPress={() => ''}
        color={darker}
        style={styles.botao}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 60,
  },
})
