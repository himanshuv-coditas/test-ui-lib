import { Routes } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { CardComponent } from './shared/components/card/card.component';
import { InputsComponent } from './shared/components/inputs/inputs.component';
import { ColorsComponent } from './shared/components/colors/colors.component';
import { TypoComponent } from './shared/components/typo/typo.component';

export const routes: Routes = [
  {
    path: 'buttons',
    component: ButtonComponent
  },
  {
    path: 'cards',
    component: CardComponent
  },
  {
    path: 'inputs',
    component: InputsComponent
  },
  {
    path: 'colors',
    component: ColorsComponent
  },
  {
    path: 'typography',
    component: TypoComponent
  }
];
