import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {IPrizeRegistration} from "../../../shared/model/prize-registration.model";
import {createRequestOption} from "../../../shared/util/request-util";
import {SERVER_API_URL} from "../../../../environments/environment";


type EntityResponseType = HttpResponse<IPrizeRegistration>;
type EntityArrayResponseType = HttpResponse<IPrizeRegistration[]>;

@Injectable({ providedIn: 'root' })
export class PrizeRegistrationService {
  public resourceUrl = SERVER_API_URL + 'api/prize-registrations';

  constructor(protected http: HttpClient) {}

  create(prizeRegistration: IPrizeRegistration): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(prizeRegistration);
    return this.http
      .post<IPrizeRegistration>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  update(prizeRegistration: IPrizeRegistration): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(prizeRegistration);
    return this.http
      .put<IPrizeRegistration>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IPrizeRegistration>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  findNumberOfRegistraionsByPrizeId(id: number): Observable<any> {
    return this.http
        .get(`${this.resourceUrl}/number-of-registrations/${id}`,
            { observe: 'response' });
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IPrizeRegistration[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(prizeRegistration: IPrizeRegistration): IPrizeRegistration {
    const copy: IPrizeRegistration = Object.assign({}, prizeRegistration, {
      registation:
        prizeRegistration.registation && prizeRegistration.registation.isValid() ? prizeRegistration.registation.toJSON() : undefined,
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.registation = res.body.registation ? moment(res.body.registation) : undefined;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((prizeRegistration: IPrizeRegistration) => {
        prizeRegistration.registation = prizeRegistration.registation ? moment(prizeRegistration.registation) : undefined;
      });
    }
    return res;
  }
}
