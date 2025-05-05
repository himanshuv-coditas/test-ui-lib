import { CardTypes } from './../../types/app';
import { Component, Input, SimpleChanges } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-card',
  imports: [CardModule],
  templateUrl: './ui-card.component.html',
  styleUrl: './ui-card.component.scss'
})
export class UiCardComponent {
  @Input() cardType: CardTypes = CardTypes.basic;
  @Input() header: string = '';
  @Input() subHeader: string = '';
  public readonly cardTypes = CardTypes;
}
