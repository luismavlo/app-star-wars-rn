import Icon from 'react-native-vector-icons/Ionicons'
import { globalColors } from '../../theme/theme'

interface IonIconProps {
  name: string
  size?: number
  color?: string
}

export const IonIcon = ({name, size = 20, color = globalColors.white}: IonIconProps) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}