export interface IAdvertisementAnswers {
  id?: number;
  answer?: string;
  correct?: boolean;
  advertisementId?: number;
}

export class AdvertisementAnswers implements IAdvertisementAnswers {
  constructor(public id?: number, public answer?: string, public correct?: boolean, public advertisementId?: number) {}
}
