import { Text, View } from 'react-native';
import { globalColors } from '../../theme/theme';


interface Props {
  episodeId: number;
  director: string;
}

export const FilmContent = ({ episodeId, director }: Props) => {
  return (
    <View style={{ padding: 20}}>
      <Text 
      style={{ fontSize: 20, color: globalColors.white }}>
        Espisode: {episodeId}
      </Text>
      <Text 
        style={{ fontSize: 20, color: globalColors.white }}>
          Director: {director}
      </Text>
    </View>
  )
}