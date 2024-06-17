import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { FilmDetailResponse } from '../../../infraestructure/interfaces/film.interfaces';
import { FilmMapper } from '../../../infraestructure/mappers/film.mapper';
import { Film } from '../../entities/film.entity';


export const getFilmByIdUseCase = async(starWarsFetcher: HttpAdapter, filmId: number): Promise<Film> => {
  try {
    const response = await starWarsFetcher.get<FilmDetailResponse>(`/films/${filmId}`);

    const film = FilmMapper.fromFilmResponseToEntity(response.result);

    return film;
  } catch (error) {
    throw new Error(`Error fetching film by id: ${error}`)
  }

}