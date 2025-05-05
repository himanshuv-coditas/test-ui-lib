import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { routes } from './app.routes';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import MyPreset from '../assets/theme/custom-preset';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideNoopAnimations(),
    providePrimeNG({
      theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: '.dark-theme'
          }
      }
  }),
  provideRouter(routes)]
};
