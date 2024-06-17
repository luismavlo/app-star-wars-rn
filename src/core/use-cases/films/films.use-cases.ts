import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { FilmsResponse } from '../../../infraestructure/interfaces/film.interfaces';
import { FilmMapper } from '../../../infraestructure/mappers/film.mapper';
import { Film } from '../../entities/film.entity';



interface Options {
  page?: number;
  limit?: number;
}

export const FilmUseCases = async(starWarsFetcher: HttpAdapter, options?: Options): Promise<Film[]> => {
  try {
    const response = await starWarsFetcher.get<FilmsResponse>('/films');

    return response?.result.map(FilmMapper.fromFilmResponseToEntity)
  } catch (error) {
    throw new Error(`Error fetching films: ${error}`)
  }

}