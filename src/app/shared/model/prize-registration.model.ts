import {Moment} from "moment";

export interface IPrizeRegistration {
  id?: number;
  registation?: Moment;
  prizeId?: number;
  userId?: number;
}

export class PrizeRegistration implements IPrizeRegistration {
  constructor(public id?: number, public registation?: Moment, public prizeId?: number, public userId?: number) {}
}
