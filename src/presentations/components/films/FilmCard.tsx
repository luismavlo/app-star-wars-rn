import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { Film } from '../../../core/entities/film.entity'
import { filmImages } from '../../../images'
import { RootStackParams } from '../../navigations/StackNavigation'
import { NavigationProp, useNavigation } from '@react-navigation/native'




interface Props {
  film: Film
}


export const FilmCard = ({ film }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <Pressable 
    onPress={() => navigation.navigate('FilmDetail', { filmId: film.id })}
    style={({ pressed }) => ({
      marginTop: 7,
      marginHorizontal: 4,
      paddingBottom: 20,
      paddingHorizontal: 7,
      opacity: pressed ? 0.8 : 1,
    })}>
      <View style={styles.ImageContainer}>
        <Image 
          style={styles.image}
          source={ filmImages[film.id - 1] }
        />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
    width: '100%',
    objectFit: 'cover',
  },
  ImageContainer: {
    width: '100%',
    flex: 1,
    borderRadius: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9
  }
})