import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from "./shared/layouts/header/header.component";
import { SidebarComponent } from './shared/layouts/sidebar/sidebar.component';
import { ThemeService } from './shared/services/customtheme.service';

@Component({
  selector: 'app-root',
  imports: [ButtonModule, RouterOutlet, SidebarModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private isDark = false;
  constructor(private themeService: ThemeService) {}
  public visibleSidebar = false;
  title = 'ui-with-prime-ng';
}
