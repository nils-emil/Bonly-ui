import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ContactService {

  constructor(protected http: HttpClient) {}

  getPlaceholderText(): any {
    return this.http.get("https://raw.githubusercontent.com/nils-emil/texts/main/contact",  {responseType: 'text'});
  }


}
