import { Component } from '@angular/core';
import { HeaderComponent as UiHeaderComponent } from '../../../../../projects/ui-lib/src/lib/layout/header/header.component';
@Component({
  selector: 'app-header',
  imports: [UiHeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
