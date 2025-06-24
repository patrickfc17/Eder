import { StyleSheet, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { CadastrarVaga } from './pages/CadastrarVaga'
import config from './styles.config'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[lighter, lighter, light]}
        locations={[locations.start, locations.middle, locations.end]}
        style={styles.container}>
        <CadastrarVaga />
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lighter,
  },
})
