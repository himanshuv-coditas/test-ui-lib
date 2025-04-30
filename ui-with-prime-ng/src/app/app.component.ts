import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from "./shared/layouts/header/header.component";
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterOutlet, SidebarModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public visibleSidebar = false;
  title = 'ui-with-prime-ng';
  themeOptions: any[] = [
    { label: 'Light', command: () => this.setTheme('light') },
    { label: 'Dark', command: () => this.setTheme('dark') },
    { label: 'System', command: () => this.setTheme('system') }
  ];
  setTheme(mode: string) {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('theme', mode);
  }
}
