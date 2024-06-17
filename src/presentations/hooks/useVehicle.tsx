

import { useEffect, useState } from 'react';

import * as UsesCases from '../../core/use-cases';
import { starWarsFetcher } from '../../config/adapters/star-wars-api.adapter';
import { Vehicle } from '../../core/entities/vehicles.entity';


export const useVehicles = () => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    loadVehicles()
  }, [])

  const loadVehicles = async () => {
    setIsLoading(true);

    const vehicles = await UsesCases.VehicleUseCases(starWarsFetcher);

    console.log(vehicles)
    setVehicles(vehicles);
    setIsLoading(false);
  }

  return {
    isLoading,
    vehicles
  }

}