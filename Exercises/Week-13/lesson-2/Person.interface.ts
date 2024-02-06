// Person.interface.ts

export interface IPerson {
  name: string;
  age: number;
  height: number;
  hobbies: IHobby[];
  weight: number;
  grow: () => void;
  loseWeight: (amount: number) => void;
  addHobby: (hobby: IHobby) => void;
  getHobbiesNames: () => string[];
}
// Hobby.interface.ts

export interface IHobby {
  hobbyName: string;
  yearsInHobby: number;
}
