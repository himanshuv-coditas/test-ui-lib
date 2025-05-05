import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TypographyBackground, TypographyVariant } from '../../types/app';

@Component({
  selector: 'lib-typography',
  imports: [CommonModule],
  templateUrl: './ui-typography.component.html',
  styleUrl: './ui-typography.component.scss'
})
export class UiTypographyComponent {
  @Input() tag: TypographyVariant = TypographyVariant.h1;
  @Input() variant: string = '';
  @Input() color: string = '';
  @Input() label: string = '';
  @Input() background: string = '';
  public readonly typography = TypographyVariant;
}
