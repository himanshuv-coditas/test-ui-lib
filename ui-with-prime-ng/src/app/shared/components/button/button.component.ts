import { Component, Input } from '@angular/core';
import { UiButtonComponent, UiCardComponent } from '../../../../../projects/ui-lib/src/public-api';
import { ButtonSize, ButtonState, ButtonTypes, ButtonVariants, CardTypes } from '../../../../../projects/ui-lib/src/lib/types/app';
import { CommonModule } from '@angular/common';
import { ButtonSeverity } from 'primeng/button';

@Component({
  selector: 'app-button',
  imports: [UiButtonComponent, UiCardComponent, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public cardTypes = CardTypes;

  public btnVariantHeader = 'Button Variants';
  public btnVariantSubHeader = 'Button variants are used to create different styles of buttons.';
  public btnVariants: ButtonVariants[] = Object.values(ButtonVariants);
  public buttonSeverity: ButtonSeverity[] = Object.values(ButtonVariants) as ButtonSeverity[];

  public btnSizeHeader = 'Button Size';
  public btnSizeSubHeader = 'Button sizes are used to create different sizes of buttons.';
  public buttonSizes: (ButtonSize | undefined)[] = [
    ButtonSize.small,
    undefined,
    ButtonSize.large
  ]
  public btnSizeLabel = ['small', 'medium', 'large'];

  public readonly btnState = ButtonState;
  public btnStateHeader = 'Button State';
  public btnStateSubHeader = 'Button states are used to create different states of buttons.';
  public btnStates: (ButtonState | undefined)[] = [
    ButtonState.default,
    ButtonState.disabled,
    ButtonState.raised
  ]
  public btnStateLabel = [ButtonState.default, ButtonState.disabled, ButtonState.raised];
}
