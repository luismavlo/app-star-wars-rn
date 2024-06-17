import { FlatList, Text, View } from 'react-native';
import { Film } from '../../../core/entities/film.entity';
import { globalColors } from '../../theme/theme';
import { FilmCard } from './FilmCard';


interface Props {
  films: Film[]
}

export const ListFilm = ({ films }: Props) => {
  

  return (
    <View>
      <FlatList 
        data={films}
        renderItem={({ item }) => (
          <FilmCard film={item} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
      />
    </View>
  )
}