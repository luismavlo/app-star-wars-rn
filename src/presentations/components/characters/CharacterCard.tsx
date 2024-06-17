import React from 'react';
import { Image, StyleSheet, View, Text } from 'react-native';
import { characterImages } from '../../../images';
import { Character } from '../../../core/entities/character.entity';
import { globalColors } from '../../theme/theme';

interface Props {
  character: Character;
  height?: number;
  width?: number;
}

export const CharacterCard = ({ character, height = 420, width = 300 }: Props) => {
  return (
    <View style={[styles.cardContainer, { width, height }]}>
      <Text style={{ fontSize: 16, color: 'white' }}>{character.name}</Text>
      <Image
        style={styles.image}
        source={characterImages[character.id - 1] ?? characterImages[13]}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 1,
    paddingBottom: 20,
    paddingHorizontal: 7,
    backgroundColor: globalColors.primary,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    alignItems: 'center', 
    overflow: 'hidden', 
  },
  image: {
    width: '100%',
    height: '85%', 
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    resizeMode: 'cover', 
  },
});
