import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    items: any[] = [
      {
        label: 'Components',
        icon: 'pi pi-fw pi-box',
        items: [
          { label: 'Button', icon: 'pi pi-circle', routerLink: '/button' },
          { label: 'Checkbox', icon: 'pi pi-check-square', routerLink: '/checkbox' },
          { label: 'Toggle Button', icon: 'pi pi-refresh', routerLink: '/toggle-button' }
        ]
      }
    ];
}
