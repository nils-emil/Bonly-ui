import {NgModule} from '@angular/core';
import {DatePipe, registerLocaleData} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {Title} from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';
import {NgxWebstorageModule, SessionStorageService} from 'ngx-webstorage';
import locale from '@angular/common/locales/en';
import {AuthInterceptor} from "../blocks/interceptor/auth.interceptor";
import {AuthExpiredInterceptor} from "../blocks/interceptor/auth-expired.interceptor";
import {ErrorHandlerInterceptor} from "../blocks/interceptor/errorhandler.interceptor";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxWebstorageModule.forRoot({prefix: 'jhi', separator: '-'})
  ],
  providers: [
    Title,
    CookieService,
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthExpiredInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    }
  ],
})
export class BonlyCoreModule {
  constructor() {
    registerLocaleData(locale);
  }
}
