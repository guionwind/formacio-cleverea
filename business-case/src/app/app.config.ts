import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { GestionPolizaService } from './common/services/gestion-poliza.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    GestionPolizaService,
  ]
};
