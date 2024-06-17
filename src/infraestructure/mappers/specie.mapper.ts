
import { Specie } from '../../core/entities/specie.entity';
import { SpecieResult } from '../interfaces/specie.interfaces';

export class SpecieMapper {

  static fromSpecieResponseToEntity(specie: SpecieResult){
    return new Specie(
      +specie.uid,
      specie.name,
    )
  }

}