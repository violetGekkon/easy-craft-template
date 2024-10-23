import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideRouter} from '@angular/router';

import MFE_ROUTES from './app.routes';
import {authInterceptor, AuthService, GATEWAY_URL, initializeUser} from "@easy-craft/auth";
import {environment} from "../environments/environment";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(MFE_ROUTES),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    AuthService,
    {
      provide: GATEWAY_URL, useValue: environment.bffUrl,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUser,
      multi: true
    }
  ]
};
