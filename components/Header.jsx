import { StyleSheet, View, Text } from 'react-native'
import { Logo } from '../components/Logo'
import { Menu } from '../components/Menu'

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.menuContainer}>
        <Menu />
      </View>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
})
