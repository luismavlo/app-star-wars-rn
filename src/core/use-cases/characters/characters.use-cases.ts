import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { CharacterResponse } from '../../../infraestructure/interfaces/character.interfaces';
import { CharacterMapper } from '../../../infraestructure/mappers/character.mapper';
import { Character } from '../../entities/character.entity';


interface Options {
  page?: number;
  limit?: number;
}

export const CharacterUseCases = async(starWarsFetcher: HttpAdapter, options?: Options): Promise<Character[]> => {
  try {

    console.log(options)

    const response = await starWarsFetcher.get<CharacterResponse>('/people', {
      params: {
        page: options?.page,
        limit: 10
      }
    })

    return response?.results.map(CharacterMapper.fromCharacterResponseToEntity)

  } catch (error) {
    throw new Error(`Error fetching films: ${error}`)
  }

}