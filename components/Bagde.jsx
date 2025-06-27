import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import defaults from '../styles.config'

const { lighter, dark, darker } = defaults.colors

export const Badge = ({ text }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={style.badge}>
        <Text style={style.badgeText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  badge: {
    backgroundColor: lighter,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: dark,
  },
  badgeText: {
    color: darker,
    fontSize: 12,
    fontWeight: '500',
  },
})
