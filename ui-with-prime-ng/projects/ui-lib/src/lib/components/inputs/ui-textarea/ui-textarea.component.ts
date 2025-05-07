import { Component, Input } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-textarea',
  imports: [TextareaModule, CommonModule],
  templateUrl: './ui-textarea.component.html',
  styleUrl: './ui-textarea.component.scss'
})
export class UiTextareaComponent {
  @Input() placeholder: string = '';
  @Input() rows: number = 5;
  @Input() cols: number = 30;
  @Input() label: string = '';
  @Input() inputType: string = 'textarea';
}
