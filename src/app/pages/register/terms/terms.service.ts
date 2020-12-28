import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import {IPrizeRegistration} from "../../../shared/model/prize-registration.model";
import {createRequestOption} from "../../../shared/util/request-util";
import {SERVER_API_URL} from "../../../../environments/environment";

@Injectable({ providedIn: 'root' })
export class TermsService {
  public resourceUrl = SERVER_API_URL + 'api/prize-registrations';

  constructor(protected http: HttpClient) {}

  getPlaceholderText(): any {
    return this.http.get("https://raw.githubusercontent.com/nils-emil/texts/main/terms",  {responseType: 'text'});
  }
}
