import { Component } from '@angular/core';
import { UiCardComponent } from '../../../../../projects/ui-lib/src/public-api';
import { ButtonModule } from 'primeng/button';
import { CardTypes } from '../../../../../projects/ui-lib/src/lib/types/app';

@Component({
  selector: 'app-card',
  imports: [UiCardComponent, ButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  public readonly cardTypes = CardTypes;
  public basedCardHeader: string = 'Basic Card';
  public advancedCardHeader: string = 'Advanced Card';
  public advancedCardSubHeader: string = 'Card subtitle';
}
