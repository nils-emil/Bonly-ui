import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IAdvertisement} from "../../shared/model/advertisement.model";
import {createRequestOption} from "../../shared/util/request-util";
import * as moment from "moment";
import {SERVER_API_URL} from "../../../environments/environment";

type EntityResponseType = HttpResponse<IAdvertisement>;
type EntityArrayResponseType = HttpResponse<IAdvertisement[]>;

@Injectable({ providedIn: 'root' })
export class AdvertisementService {
  public resourceUrl = SERVER_API_URL + 'api/content';
  public clientResourceUrl = SERVER_API_URL + 'api/client/content';

  constructor(protected http: HttpClient) {}

  getPlaceholderText(): any {
    return this.http.get("https://raw.githubusercontent.com/nils-emil/texts/main/no_more_prizes",  {responseType: 'text'});
  }

  create(advertisement: IAdvertisement): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(advertisement);
    return this.http
      .post<IAdvertisement>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(advertisement: IAdvertisement): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(advertisement);
    return this.http
      .put<IAdvertisement>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IAdvertisement>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  findOneAdToShow(): Observable<EntityResponseType> {
    return this.http
      .get<IAdvertisement>(`${this.clientResourceUrl}/find-one`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IAdvertisement[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  chooseAnswer(questionId: any, answerId: any): Observable<any> {
    return this.http.post(`${this.clientResourceUrl}/answer/${questionId}/${answerId}`, { questionId, answerId });
  }

  protected convertDateFromClient(advertisement: IAdvertisement): IAdvertisement {
    const copy: IAdvertisement = Object.assign({}, advertisement, {
      activeFrom: advertisement.activeFrom && advertisement.activeFrom.isValid() ? advertisement.activeFrom.toJSON() : undefined,
      activeUntill: advertisement.activeUntill && advertisement.activeUntill.isValid() ? advertisement.activeUntill.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.activeFrom = res.body.activeFrom ? moment(res.body.activeFrom) : undefined;
      res.body.activeUntill = res.body.activeUntill ? moment(res.body.activeUntill) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((advertisement: IAdvertisement) => {
        advertisement.activeFrom = advertisement.activeFrom ? moment(advertisement.activeFrom) : undefined;
        advertisement.activeUntill = advertisement.activeUntill ? moment(advertisement.activeUntill) : undefined;
      });
    }
    return res;
  }

}
