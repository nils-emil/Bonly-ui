import {AdvertisementAnswers} from "./advertisement-answers.model";
import {Moment} from "moment";

export interface IAdvertisement {
  imageId: string;
  id?: number;
  activeFrom?: Moment;
  activeUntill?: Moment;
  imageContentType?: string;
  image?: any;
  advertisementAnswers?: AdvertisementAnswers[];
  creditCount?: number;
  question?: string;
  correctAnswerId?: number;
}

export class Advertisement implements IAdvertisement {
  constructor(
      public imageId: string,
      public id?: number,
      public activeFrom?: Moment,
      public activeUntill?: Moment,
      public imageContentType?: string,
      public image?: any,
      public advertisementAnswers?: AdvertisementAnswers[],
      public creditCount?: number,
      public question?: string,
      public correctAnswerId?: number
  ) {
  }
}
