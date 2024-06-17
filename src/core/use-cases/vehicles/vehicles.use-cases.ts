import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { VehiclesResponse } from '../../../infraestructure/interfaces/vehicles.interfaces';
import { VehicleMapper } from '../../../infraestructure/mappers/vehicle.mapper';
import { Vehicle } from '../../entities/vehicles.entity';




interface Options {
  page?: number;
  limit?: number;
}

export const VehicleUseCases = async(starWarsFetcher: HttpAdapter, options?: Options): Promise<Vehicle[]> => {
  try {
    const response = await starWarsFetcher.get<VehiclesResponse>('/vehicles');

    return response?.results.map(VehicleMapper.fromVehiclesResponseToEntity)

  } catch (error) {
    throw new Error(`Error fetching films: ${error}`)
  }
}