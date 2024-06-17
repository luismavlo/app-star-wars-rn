import { NativeScrollEvent, NativeSyntheticEvent, Text, View } from 'react-native';
import { Character } from '../../../core/entities/character.entity'
import { globalColors } from '../../theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { CharacterCard } from './CharacterCard';
import { useEffect, useRef } from 'react';


interface Props {
  characters: Character[];
  title?: string;
  loadNextPage?: () => void;
}

export const HorizontalCarrousel = ({ characters, title, loadNextPage }: Props) => {

  const isLoading = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [characters])
  

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {

    if(isLoading.current) return;

    const { contentOffset, layoutMeasurement, contentSize } = event.nativeEvent;

    const isEndReached = (contentOffset.x + layoutMeasurement.width + 600) >= contentSize.width;

    if(!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  }

  return (
    <View style={{ height: title ? 260: 220 }}>
      {
        title && (
          <Text style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
            color: globalColors.secondary
          }}>
            {title}
          </Text>
        )
      }

      <FlatList 
        data={characters}
        renderItem={({item}) => (
          <CharacterCard character={item} />
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />

    </View>
  )
}