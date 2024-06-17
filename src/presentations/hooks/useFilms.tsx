import { useEffect, useState } from 'react'
import { Film } from '../../core/entities/film.entity';
import * as UsesCases from '../../core/use-cases';
import { starWarsFetcher } from '../../config/adapters/star-wars-api.adapter';


export const useFilms = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    loadFilms();
  }, [])
  

  const loadFilms = async () => {
    setIsLoading(true);

    const films = await UsesCases.FilmUseCases(starWarsFetcher);

    setFilms(films);
    setIsLoading(false);
  }

  return {
    isLoading,
    films,
  }

}