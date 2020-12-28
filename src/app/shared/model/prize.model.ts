import {Moment} from "moment";

export interface IPrize {
  title?: string;
  id?: number;
  registationStops?: Moment;
  winnerChosenAt?: Moment;
  image?: any;
  imageContentType?: string;
  type?: string;
  creditsRequired?: number;
  winnerId?: number;
  winner?: string;
}

export class Prize implements IPrize {
  constructor(
      public title?: string,
      public id?: number,
      public registationStops?: Moment,
      public winnerChosenAt?: Moment,
      public image?: any,
      public imageContentType?: string,
      public type?: string,
      public creditsRequired?: number,
      public winnerId?: number,
      public winner?: string
  ) {
  }
}
