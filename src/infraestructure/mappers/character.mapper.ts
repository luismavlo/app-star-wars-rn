import { Character } from '../../core/entities/character.entity';
import { CharacterResult } from '../interfaces/character.interfaces';



export class CharacterMapper {

  static fromCharacterResponseToEntity(character: CharacterResult){
    return new Character(
      +character.uid,
      character.name,
    )
  }

}