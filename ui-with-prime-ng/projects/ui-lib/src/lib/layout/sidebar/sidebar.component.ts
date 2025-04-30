import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { App } from '../../types/app';

@Component({
  selector: 'lib-sidebar',
  imports: [SidebarModule, ButtonModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public visibleSidebar: boolean = false;
  @Input() sidebarItems: App.SidebarItem[] = [];
}
