import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly THEME_KEY = 'selected-theme';
  private currentThemeSubject = new BehaviorSubject<string>(this.getStoredTheme());

  constructor() {
    // Apply the stored theme on service initialization
    this.applyTheme(this.getStoredTheme());
  }

  private getStoredTheme(): string {
    return localStorage.getItem(this.THEME_KEY) || 'light';
  }

  public getCurrentTheme() {
    return this.currentThemeSubject.value;
  }

  public themeChanges() {
    return this.currentThemeSubject.asObservable();
  }

  public applyTheme(theme: string) {
    // Store theme preference
    localStorage.setItem(this.THEME_KEY, theme);
    this.currentThemeSubject.next(theme);

    // Apply theme classes
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);

    // Apply PrimeNG theme
    const linkId = 'prime-ng-theme';
    let themeLink = document.getElementById(linkId) as HTMLLinkElement;

    if (!themeLink) {
      themeLink = document.createElement('link');
      themeLink.id = linkId;
      themeLink.rel = 'stylesheet';
      document.head.appendChild(themeLink);
    }

    // Update PrimeNG theme CSS
    themeLink.href = `assets/themes/primeng-${theme}/theme.css`;
  }

  public toggleTheme() {
    const newTheme = this.getCurrentTheme() === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
}
