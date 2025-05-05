import { Component, Input } from '@angular/core';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { ButtonSize, ButtonVariants } from '../../types/app';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  imports: [ButtonModule,  CommonModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss'
})
export class UiButtonComponent {
  @Input() label: string = 'primary';
  @Input() severity: ButtonSeverity = ButtonVariants.primary as ButtonSeverity;
  @Input() size!: ButtonSize | undefined;
  @Input() disabled: boolean = false;
  @Input() raised: boolean = false;
}
