import { StyleSheet, View } from 'react-native'
import { Menu } from './Menu'
import { LogoSimplificada } from './Logos/LogoSimplificada'
import { Logo } from './Logos/Logo'

export const Header = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
      marginHorizontal: 8,
    },
  })

  return (
    <View style={styles.container}>
      <Menu />
      <View>{children}</View>
      {!children && <Logo />}
      {!!children && <LogoSimplificada />}
    </View>
  )
}
