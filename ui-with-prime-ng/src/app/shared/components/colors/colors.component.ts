import { Component } from '@angular/core';
import { UiColorsComponent } from '../../../../../projects/ui-lib/src/lib/components/ui-colors/ui-colors.component';
import { CardTypes, Colors } from '../../../../../projects/ui-lib/src/lib/types/app';
import { UiCardComponent } from '../../../../../projects/ui-lib/src/public-api';

@Component({
  selector: 'app-colors',
  imports: [UiColorsComponent, UiCardComponent],
  templateUrl: './colors.component.html',
  styleUrl: './colors.component.scss'
})
export class ColorsComponent {
  public readonly color = Colors;
  public readonly cardTypes = CardTypes;
}
