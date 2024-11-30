import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-eo3nenawanlp8ne0.us.auth0.com',
      clientId: '0pPHorBukqJYrG5OshBdbFNhhD5h42sN',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    provideHttpClient()
  ]
};
