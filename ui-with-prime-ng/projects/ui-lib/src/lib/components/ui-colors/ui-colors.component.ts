import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-colors',
  imports: [CommonModule],
  templateUrl: './ui-colors.component.html',
  styleUrl: './ui-colors.component.scss'
})
export class UiColorsComponent {
  @Input() color: string = '';
}
