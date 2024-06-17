import { HttpAdapter } from '../../../config/adapters/http/http.adapter';

import { SpecieResponse } from '../../../infraestructure/interfaces/specie.interfaces';
import { SpecieMapper } from '../../../infraestructure/mappers/specie.mapper';


import { Specie } from '../../entities/specie.entity';


interface Options {
  page?: number;
  limit?: number;
}

export const SpecieUseCases = async(starWarsFetcher: HttpAdapter, options?: Options): Promise<Specie[]> => {
  try {
    const response = await starWarsFetcher.get<SpecieResponse>('/species');

    return response?.results.map(SpecieMapper.fromSpecieResponseToEntity)

  } catch (error) {
    throw new Error(`Error fetching films: ${error}`)
  }
}