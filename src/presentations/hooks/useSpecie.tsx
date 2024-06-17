import { useEffect, useState } from 'react';

import * as UsesCases from '../../core/use-cases';
import { starWarsFetcher } from '../../config/adapters/star-wars-api.adapter';
import { Specie } from '../../core/entities/specie.entity';


export const useSpecies = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [species, setSpecies] = useState<Specie[]>([]);

  useEffect(() => {
    loadSpecies()
  }, [])

  const loadSpecies = async () => {
    setIsLoading(true);

    const species = await UsesCases.SpecieUseCases(starWarsFetcher);

    setSpecies(species);
    setIsLoading(false);
  }

  return {
    isLoading,
    species
  }

}