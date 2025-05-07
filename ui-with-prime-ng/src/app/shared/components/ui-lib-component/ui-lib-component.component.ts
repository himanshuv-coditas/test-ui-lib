import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
@Component({
  selector: 'app-ui-lib-component',
  imports: [RouterOutlet, SidebarModule, HeaderComponent, SidebarComponent],
  templateUrl: './ui-lib-component.component.html',
  styleUrl: './ui-lib-component.component.scss'
})
export class UiLibComponentComponent {

}
