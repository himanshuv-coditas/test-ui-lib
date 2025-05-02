import { Component } from '@angular/core';
import { UiCardComponent } from '../../../../../projects/ui-lib/src/public-api';

@Component({
  selector: 'app-card',
  imports: [UiCardComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

}
