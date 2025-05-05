//mypreset.ts
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MyPreset = definePreset(Aura, {
  semantic: {
      colorScheme: {
          light: {
              surface: {
                  0: '#ffffff',
                  50: '{zinc.50}',
                  100: '{zinc.100}',
                  200: '{zinc.200}',
                  300: '{zinc.300}',
                  400: '{zinc.400}',
                  500: '{zinc.500}',
                  600: '{zinc.600}',
                  700: '{zinc.700}',
                  800: '{zinc.800}',
                  900: '{zinc.900}',
                  950: '{zinc.950}'
              },
              primary: '#007bff',
              success: '#10b981',
              danger: '#dc3545',
              warning: '#ffc107',
              info: '#17a2b8'
          },
          dark: {
              surface: {
                  0: '#17a2b8',
                  50: '{slate.50}',
                  100: '{slate.100}',
                  200: '{slate.200}',
                  300: '{slate.300}',
                  400: '{slate.400}',
                  500: '{slate.500}',
                  600: '{slate.600}',
                  700: '{slate.700}',
                  800: '{slate.800}',
                  900: '{slate.900}',
                  950: '{slate.950}'
              },
              primary: '#007bff',
              success: '#10b981',
              danger: '#dc3545',
              warning: '#ffc107',
              info: '#17a2b8',
          }
      }
  },
});

export default MyPreset;