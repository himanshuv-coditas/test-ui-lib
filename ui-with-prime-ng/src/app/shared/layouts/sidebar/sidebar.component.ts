import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SidebarComponent as UiSidebarComponent } from "../../../../../projects/ui-lib/src/lib/layout/sidebar/sidebar.component";
import { SidebarItem } from '../../../../../projects/ui-lib/src/lib/types/app';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule, SidebarModule, ButtonModule, CommonModule, UiSidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public sidebarItems: SidebarItem[] = [
    { label: 'Buttons', icon: 'pi-circle', routerLink: '/buttons' },
    { label: 'Inputs', icon: 'pi-pencil', routerLink: '/inputs' },
    { label: 'Colors', icon: 'pi-palette', routerLink: '/colors' },
    { label: 'Cards', icon: 'pi-clone', routerLink: '/cards' },
    { label: 'Typography', icon: 'pi-align-left', routerLink: '/typography' },
    { label: 'Table', icon: 'pi-table', routerLink: '/table' },
  ];
}
