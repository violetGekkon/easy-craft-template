import {APP_INITIALIZER, ApplicationConfig} from '@angular/core';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {provideRouter} from '@angular/router';

import MFE_ROUTES from './app.routes';
import {authInterceptor, AuthService, GATEWAY_URL, initializeUser} from "@easy-craft/auth";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(MFE_ROUTES),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    AuthService,
    {
      provide: GATEWAY_URL, useValue: 'http://127.0.0.1:8080',
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeUser,
      multi: true
    }
  ]
};
