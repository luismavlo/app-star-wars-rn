import { useEffect, useState } from 'react'
import { Film } from '../../core/entities/film.entity';
import * as UsesCases from '../../core/use-cases';
import { starWarsFetcher } from '../../config/adapters/star-wars-api.adapter';


export const useFilm = ( filmId: number ) => {

  const [isLoading, setIsLoading] = useState(true);
  const [film, setFilm] = useState<Film>();

  useEffect(() => {
    loadFilm();
  }, [filmId])
  

  const loadFilm = async () => {
    setIsLoading(true);

    const film = await UsesCases.getFilmByIdUseCase(starWarsFetcher, filmId);

    setFilm(film);
    setIsLoading(false);
  }

  return {
    isLoading,
    film,
  }

}