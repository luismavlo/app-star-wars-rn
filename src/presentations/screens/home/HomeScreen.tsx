import { Text, View } from 'react-native'
import { globalColors } from '../../theme/theme'
import { useCharacter } from '../../hooks/useCharacter'
import { useSpecies } from '../../hooks/useSpecie'
import { useVehicles } from '../../hooks/useVehicle'
import { HorizontalCarrousel } from '../../components/characters/HorizontalCarrousel'



export const HomeScreen = () => {

  const { isLoading: IsLoadingCharacters, characters, loadNextCharacters } = useCharacter()
  // const { isLoading, species } = useSpecies()
  // const { isLoading: IsLoadingVehicles, vehicles } = useVehicles()

  return (
    <View>
      <Text style={{ 
        color: globalColors.secondary, 
        textAlign: 'center', 
        fontSize: 30, 
        fontWeight: 'bold',
        marginBottom: 20
        }}>
        General
      </Text>

      <HorizontalCarrousel 
        characters={characters} 
        title='Personajes' 
        loadNextPage={loadNextCharacters}
      />

    </View>
  )
}