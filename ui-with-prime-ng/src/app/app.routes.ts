import { Routes } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { CardComponent } from './shared/components/card/card.component';

export const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonComponent
  },
  {
    path: 'cards',
    component: CardComponent
  }
];
