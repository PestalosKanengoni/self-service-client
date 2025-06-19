import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {en_US, NZ_I18N} from "ng-zorro-antd/i18n";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptors} from "@angular/common/http";
import {ModeToggleService} from "./core/modules/mode/mode-toggle.service";
import {MODE_STORAGE_SERVICE, ModeLocalStorageService} from "./core/modules/mode/mode-storage.service";
import {DatePipe, HashLocationStrategy, LocationStrategy} from "@angular/common";
// import {HttpConfigInterceptor} from "./core/interceptor/http.interceptor";
import {CookiesService} from "./features/shared/storage/cookies.service";
import {responseMockingInterceptor} from "./core/interceptor/mock-http.interceptor";
import {loggingInterceptor} from "./core/interceptor/logging.interceptor";
import {serverErrorsInterceptor} from "./core/exceptions/servererrors.service";
import {httpInterceptor} from "./core/interceptor/http.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CookiesService,
    DatePipe,
    provideAnimationsAsync(),
    provideHttpClient(withInterceptors([httpInterceptor, loggingInterceptor, responseMockingInterceptor, serverErrorsInterceptor])),
    ModeToggleService,
    Location,
    {
      provide: NZ_I18N,
      useValue: en_US
    },
    {
      provide: MODE_STORAGE_SERVICE,
      useClass: ModeLocalStorageService,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
