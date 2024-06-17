import { Film } from '../../core/entities/film.entity';
import { FilmResult } from '../interfaces/film.interfaces';




export class FilmMapper {

  static fromFilmResponseToEntity(film: FilmResult){
    return new Film(
      +film.uid,
      film.properties.episode_id,
      film.properties.title,
      film.properties.director,
    )
  }

}