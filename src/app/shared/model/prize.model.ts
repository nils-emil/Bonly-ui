import {Moment} from "moment";

export interface IPrize {
  id?: number;
  registationStops?: Moment;
  winnerChosenAt?: Moment;
  image?: any;
  imageContentType?: string;
  type?: string;
  creditsRequired?: number;
  winnerId?: number;
  winnerLogin?: string;
}

export class Prize implements IPrize {
  constructor(
    public id?: number,
    public registationStops?: Moment,
    public winnerChosenAt?: Moment,
    public image?: any,
    public imageContentType?: string,
    public type?: string,
    public creditsRequired?: number,
    public winnerId?: number,
    public winnerLogin?: string
  ) {}
}
