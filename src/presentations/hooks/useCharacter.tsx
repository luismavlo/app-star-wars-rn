import { useEffect, useState } from 'react';
import { Character } from '../../core/entities/character.entity';
import * as UsesCases from '../../core/use-cases';
import { starWarsFetcher } from '../../config/adapters/star-wars-api.adapter';

let characterPageNumber = 1;

export const useCharacter = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    loadCharacters()
  }, [])

  const loadCharacters = async () => {
    setIsLoading(true);

    const characters = await UsesCases.CharacterUseCases(starWarsFetcher);

    setCharacters(characters);
    setIsLoading(false);
  }

  return {
    isLoading,
    characters,

    //methods
    loadNextCharacters: async () => {
      characterPageNumber++;

      const characters = await UsesCases.CharacterUseCases(starWarsFetcher, { page: characterPageNumber});

      setCharacters(prev => [...prev, ...characters]);
    } 
  }
  

}