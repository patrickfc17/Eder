import { StyleSheet, View, TouchableOpacity } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'
import defaults from '../styles.config'

const { lighter, dark } = defaults.colors

export const Menu = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('index')
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.container}>
          <Svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Rect width="56" height="56" rx="28" fill={dark} />
            <Path
              d="M15 19.1429H41C41.5523 19.1429 42 18.6312 42 18V15.1429C42 14.5116 41.5523 14 41 14H15C14.4477 14 14 14.5116 14 15.1429V18C14 18.6312 14.4477 19.1429 15 19.1429ZM15 30.5714H41C41.5523 30.5714 42 30.0598 42 29.4286V26.5714C42 25.9402 41.5523 25.4286 41 25.4286H15C14.4477 25.4286 14 25.9402 14 26.5714V29.4286C14 30.0598 14.4477 30.5714 15 30.5714ZM15 42H41C41.5523 42 42 41.4884 42 40.8571V38C42 37.3688 41.5523 36.8571 41 36.8571H15C14.4477 36.8571 14 37.3688 14 38V40.8571C14 41.4884 14.4477 42 15 42Z"
              fill={lighter}
            />
          </Svg>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 42,
    gap: 10,
    paddingStart: 20,
  },
})
