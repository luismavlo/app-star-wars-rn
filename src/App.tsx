import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
import { TabNavigation } from './presentations/navigations/BottomTabNavigation'

export const App = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}