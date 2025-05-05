import { Component, Input } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SidebarItem } from '../../types/app';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'lib-sidebar',
  imports: [SidebarModule, ButtonModule, CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public visibleSidebar: boolean = false;
  @Input() sidebarItems: SidebarItem[] = [];
}
