import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from "./shared/layouts/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [ButtonModule, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ui-with-prime-ng';
}
