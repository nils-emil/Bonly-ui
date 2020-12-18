export interface IUserAdvertisementAnswers {
  id?: number;
  stateProvince?: string;
  userId?: number;
  advertisementId?: number;
}

export class UserAdvertisementAnswers implements IUserAdvertisementAnswers {
  constructor(public id?: number, public stateProvince?: string, public userId?: number, public advertisementId?: number) {}
}
