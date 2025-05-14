// .storybook/preview.ts
import { applicationConfig, type Preview } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

setCompodocJson(docJson);

function provideTheme(config: PrimeNG) {
  return () => {
    config.theme.set({
      preset: Aura,
      options: {
        darkModeSelector: false,
      },
    });
  };
}

const preview: Preview = {
  decorators: [
    applicationConfig({
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: provideTheme,
          deps: [PrimeNG],
          multi: true,
        },
        importProvidersFrom(BrowserAnimationsModule)
      ],
    }),
  ],
};

export default preview;
