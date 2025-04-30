import { AuraDark } from '@primeng/themes/aura-dark';
import { inject, Injectable, signal } from '@angular/core';
import Aura from '@primeng/themes/aura';
@Injectable({
  providedIn: 'root'
})
export class CustomthemeService {
  themeMode = signal<'light' | 'dark'>('light');
  constructor() { }

  getCurrentPreset = () => {
    return this.themeMode() === 'light' ? Aura : AuraDark;
  };
}
