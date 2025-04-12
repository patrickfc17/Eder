import { StyleSheet, Text, View } from 'react-native'
import Svg, { Rect } from 'react-native-svg'
import defaults from '../styles.config'

const { lighter, dark } = defaults.colors

export const Logo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>Éder</Text>
      <Svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect
          x="1.5"
          y="1.5"
          width="39"
          height="39"
          rx="2.5"
          fill={lighter}
          stroke={dark}
          stroke-width="3"
        />
        <Rect
          x="9.13635"
          y="9.13636"
          width="23.7273"
          height="23.7273"
          fill={lighter}
          stroke={dark}
          stroke-width="3"
        />
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 42,
    justifyContent: 'center',
    gap: 10,
  },
  nome: {
    fontSize: 32,
    color: dark,
    fontWeight: 'semibold',
  },
})
