import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { ButtonModule, ButtonSeverity } from 'primeng/button';
import { ButtonSize, ButtonVariants } from '../../types/app';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-button',
  imports: [ButtonModule, CommonModule, RouterModule],
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.scss'
})
export class UiButtonComponent {
  @Input() label: string = 'primary';
  @Input() severity: ButtonSeverity = ButtonVariants.primary as ButtonSeverity;
  @Input() size!: ButtonSize | undefined;
  @Input() disabled: boolean = false;
  @Input() raised: boolean = false;
  @Input() routerLink: string = '';
  @Output() clickEmitter = new EventEmitter<string>();

  onClick() {
    this.clickEmitter.emit(this.label);
  }
}
