import {Text, View} from 'react-native';
import {globalColors} from '../../theme/theme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigations/StackNavigation';
import { useFilm } from '../../hooks/useFilm';
import { FilmHeader } from '../../components/film/FilmHeader';
import { FilmContent } from '../../components/film/FilmContent';

interface Props extends StackScreenProps<RootStackParams, 'FilmDetail'> {}

export const FilmDetail = ({route}: Props) => {
  const {filmId} = route.params;

  const { isLoading, film } = useFilm(filmId);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FilmHeader 
        id={filmId} 
        title={film!.name} />

      <FilmContent 
        episodeId={film!.episodeId} 
        director={film!.director}
      />
    </View>
  );
};
