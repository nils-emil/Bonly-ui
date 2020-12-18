export class Account {
  constructor(
    public activated: boolean,
    public authorities: string[],
    public email: string,
    public firstName: string,
    public langKey: string,
    public creditCount: number,
    public gender: string,
    public age: string,
    public lastName: string,
    public login: string,
    public imageUrl: string
  ) {}
}
