import { LinearGradient } from 'expo-linear-gradient'
import { Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import config from '../styles.config'

const { lighter, light } = config.colors
const locations = {
  start: 0,
  middle: 0.64,
  end: 1,
}

export default function RootLayout() {
  return (
    <LinearGradient
      colors={[lighter, lighter, light]}
      locations={[locations.start, locations.middle, locations.end]}
      style={styles.container}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="cadastre-se"
          options={{
            title: 'Cadastre-se',
          }}
        />
      </Stack>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
