import { Routes } from '@angular/router';
import { ButtonComponent } from './shared/components/button/button.component';
import { CardComponent } from './shared/components/card/card.component';
import { InputsComponent } from './shared/components/inputs/inputs.component';
import { ColorsComponent } from './shared/components/colors/colors.component';
import { TypoComponent } from './shared/components/typo/typo.component';
import { TableComponent } from './shared/components/table/table.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { UiLibComponentComponent } from './shared/components/ui-lib-component/ui-lib-component.component';
import { HomeComponent } from './pages/home/home.component';
import { OnBoardingComponent } from './pages/on-boarding/on-boarding.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'ui-library',
    component: UiLibComponentComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'buttons',
        pathMatch: 'full'
      },
      {
        path: 'buttons',
        component: ButtonComponent,
      },
      {
        path: 'cards',
        component: CardComponent,
      },
      {
        path: 'inputs',
        component: InputsComponent,
      },
      {
        path: 'colors',
        component: ColorsComponent,
      },
      {
        path: 'typography',
        component: TypoComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
    ]
  },
  {
    path: 'onboarding',
    canActivate: [AuthGuard],
    component: OnBoardingComponent,
  },
];
