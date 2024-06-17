import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { FilmDetail } from '../screens/film-detail/FilmDetail';
import { globalColors } from '../theme/theme';


export type RootStackParams = {
  Home: undefined;
  FilmDetail: { filmId: number };
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      cardStyle: { backgroundColor: globalColors.primary },
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FilmDetail" component={FilmDetail} />
    </Stack.Navigator>
  );
}