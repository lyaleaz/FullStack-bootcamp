// Hobby.ts
import { IHobby } from './Person.interface';

export class Hobby implements IHobby {
  constructor(public hobbyName: string, public yearsInHobby: number) {}
}
