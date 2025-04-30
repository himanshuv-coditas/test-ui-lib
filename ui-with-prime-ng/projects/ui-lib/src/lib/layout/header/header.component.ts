import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { SplitButton } from 'primeng/splitbutton';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'lib-header',
  imports: [ToolbarModule, ButtonModule, SplitButton],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  items: any[] = [
    {
      label: '  Light',
      icon: 'pi pi-sun'
    },
    {
      label: 'Dark',
      icon: 'pi pi-moon'
    },
    {
      label: 'System',
      icon: 'pi pi-moon'
    }
  ];
}
