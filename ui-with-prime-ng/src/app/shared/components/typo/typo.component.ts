import { Component } from '@angular/core';
import { CardTypes, TypographyBackground, TypographyColor, TypographyVariant } from '../../../../../projects/ui-lib/src/lib/types/app';
import { UiCardComponent } from "../../../../../projects/ui-lib/src/lib/components/ui-card/ui-card.component";
import { UiTypographyComponent } from '../../../../../projects/ui-lib/src/public-api';

@Component({
  selector: 'app-typo',
  imports: [UiCardComponent, UiTypographyComponent],
  templateUrl: './typo.component.html',
  styleUrl: './typo.component.scss'
})
export class TypoComponent {
  public readonly typography = TypographyVariant;
  public readonly cardTypes = CardTypes;
  public readonly typographyColor = TypographyColor;
  public readonly typographyBackground = TypographyBackground;
}
