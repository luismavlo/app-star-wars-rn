import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { FilmScreen } from '../screens/film/FilmScreen';
import { SearchScreen } from '../screens/search/SearchScreen';
import { globalColors } from '../theme/theme';
import { IonIcon } from '../components/shared/IonIcon';
import { StackNavigation } from './StackNavigation';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ 
        backgroundColor: globalColors.primary,
      }}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: globalColors.primary,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        }
      }}
      
    >
      <Tab.Screen 
        name="TabHome" 
        options={{ title: 'Home', tabBarIcon: ({ color }) => (<IonIcon name='home-outline' color={color} />) }} component={StackNavigation} />
      <Tab.Screen 
        name="TabFilm" 
        options={{ title: 'Films', tabBarIcon: ({ color }) => (<IonIcon name='videocam-outline' color={color} />) }} 
        component={FilmScreen} />
      <Tab.Screen 
        name="TabSearch" 
        options={{ title: 'Search', tabBarIcon: ({ color }) => (<IonIcon name='search-outline' color={color} />) }} 
        component={SearchScreen} />
    </Tab.Navigator>
  );
}
