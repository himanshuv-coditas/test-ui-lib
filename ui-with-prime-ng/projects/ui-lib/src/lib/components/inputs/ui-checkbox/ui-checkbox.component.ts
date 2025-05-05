import { Component, Input } from '@angular/core';
import { CheckboxStyle } from '../../../types/app';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'lib-checkbox',
  imports: [InputSwitchModule, FormsModule, CommonModule, CheckboxModule],
  templateUrl: './ui-checkbox.component.html',
  styleUrl: './ui-checkbox.component.scss'
})
export class UiCheckboxComponent {
  @Input() label: string = 'text';
  @Input() checkboxStyle: CheckboxStyle = CheckboxStyle.box;
  public readonly checkboxStyles = CheckboxStyle;
  public checkboxValue: boolean = false;
}
