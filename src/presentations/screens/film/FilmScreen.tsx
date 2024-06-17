import { Text, View } from 'react-native'
import { globalColors } from '../../theme/theme'
import { useFilms } from '../../hooks/useFilms';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ListFilm } from '../../components/films/ListFilm';

export const FilmScreen = () => {

  const { isLoading, films } = useFilms();
  const { top } = useSafeAreaInsets()
  
  if(isLoading){
    return <Text style={{ color: globalColors.white }}>Loading...</Text>
  }

  return (
    <View style={{
        padding: 10,
        paddingTop: top + 10,
      }}>
      <Text style={{ 
        color: globalColors.secondary, 
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold',
        }}>
          Peliculas  
      </Text>

      <ListFilm films={films} />
      
    </View>
  )
}