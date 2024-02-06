
import { IPerson, IHobby } from './Person.interface';



export class Person implements IPerson {
  constructor(
    public name: string,
    public age: number,
    public height: number,
    public weight: number,
    public hobbies: IHobby[]
  ) {}

  grow(): void {
    this.age++;
  }

  loseWeight(amount: number): void {
    this.weight -= amount;
  }

  addHobby(hobby: IHobby): void {
    this.hobbies.push(hobby);
  }

  getHobbiesNames(): string[] {
    return this.hobbies.map(hobby => hobby.hobbyName);
  }
}
