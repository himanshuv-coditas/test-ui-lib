import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';
interface Theme {
  label: string;
  icon: string;
}
enum ThemeType {
  Light = 'Light',
  Dark = 'Dark',
}

@Component({
  selector: 'lib-header',
  imports: [ToolbarModule, ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() headerTitle: string = '';
  public readonly themeTypes = ThemeType;
  readonly theme = signal<ThemeType>(ThemeType.Light);
  readonly icon = computed(() =>
    this.theme() === ThemeType.Light ? 'pi pi-sun' : 'pi pi-moon'
  );
  items: Theme[] = [
    {
      label: 'Light',
      icon: 'pi pi-sun',
    },
    {
      label: 'Dark',
      icon: 'pi pi-moon',
    },
  ];

  public toggleTheme() {
    this.theme.set(this.theme() === ThemeType.Light ? ThemeType.Dark : ThemeType.Light);
    const element = document.querySelector('html');
    if (element !== null) {
      element.classList.toggle('dark-theme');
    }
  }
}
