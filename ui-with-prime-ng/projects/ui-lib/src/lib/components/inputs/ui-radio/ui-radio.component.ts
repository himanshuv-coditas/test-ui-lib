import { Component, Input } from '@angular/core';
import { Option, RadioStyle } from '../../../types/app';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-radio',
  imports: [RadioButtonModule, CommonModule, FormsModule],
  templateUrl: './ui-radio.component.html',
  styleUrl: './ui-radio.component.scss'
})
export class UiRadioComponent {
  @Input() options: Option[] = [];
  @Input() radioStyle: RadioStyle = RadioStyle.vertical;
  public readonly radioLayout = RadioStyle;
  public radioValue: string = '';
}
