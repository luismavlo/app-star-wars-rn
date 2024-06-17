import { Vehicle } from '../../core/entities/vehicles.entity';
import { VehiclesResult } from '../interfaces/vehicles.interfaces';



export class VehicleMapper {

  static fromVehiclesResponseToEntity(vehicle: VehiclesResult){
    return new Vehicle(
      +vehicle.uid,
      vehicle.name,
    )
  }

}