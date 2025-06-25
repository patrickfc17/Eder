import Svg, { Rect } from 'react-native-svg'
import config from '../../styles.config'

const { lighter, darker } = config.colors

export const LogoSimplificada = () => {
  return (
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
        stroke={darker}
        strokeWidth={3}
      />
      <Rect
        x="9.13635"
        y="9.13636"
        width="23.7273"
        height="23.7273"
        fill={lighter}
        stroke={darker}
        strokeWidth={3}
      />
    </Svg>
  )
}
