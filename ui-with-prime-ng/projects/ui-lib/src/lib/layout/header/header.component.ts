import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
import { ThemeService } from '../../services/theme.service';

export enum ThemeType {
  Light = 'light',
  Dark = 'dark'
}

interface Theme {
  label: string;
  value: ThemeType;
}

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ThemeService]
})
export class HeaderComponent {
  private themeService: ThemeService;
  isDarkMode$;

  themes: Theme[] = [
    {
      label: 'Light',
      value: ThemeType.Light,
    },
    {
      label: 'Dark',
      value: ThemeType.Dark,
    },
  ];

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
    this.isDarkMode$ = this.themeService.themeChanges();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
