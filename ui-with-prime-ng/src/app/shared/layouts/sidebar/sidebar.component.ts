import { Component } from '@angular/core';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SidebarComponent as UiSidebarComponent } from "../../../../../projects/ui-lib/src/lib/layout/sidebar/sidebar.component";
import { App } from '../../../../../projects/ui-lib/src/lib/types/app';

@Component({
  selector: 'app-sidebar',
  imports: [PanelMenuModule, SidebarModule, ButtonModule, CommonModule, UiSidebarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public sidebarItems: App.SidebarItem[] = [
    { label: 'Colors', icon: 'pi pi-palette', routerLink: '/colors' },
    { label: 'Typography', icon: 'pi pi-font', routerLink: '/typography' },
    { label: 'Buttons', icon: 'pi pi-circle', routerLink: '/buttons' },
    { label: 'Inputs', icon: 'pi pi-pencil', routerLink: '/inputs' },
    { label: 'Cards', icon: 'pi pi-clone', routerLink: '/cards' },
    { label: 'Navigation', icon: 'pi pi-bars', routerLink: '/navigation' },
  ];
}
