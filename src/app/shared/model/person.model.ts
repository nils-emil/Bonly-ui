export interface IPerson {
  id?: number;
  name?: string;
}

export class Person implements IPerson {
  constructor(public id?: number, public name?: string) {}
}
