import { Component, Input } from '@angular/core';
import { CheckboxStyle, FieldTypes, InputTypes, Option, RadioStyle, SelectStyle, Size } from '../../types/app';
import { UiCheckboxComponent } from '../inputs/ui-checkbox/ui-checkbox.component';
import { UiInputComponent } from '../inputs/ui-input/ui-input.component';
import { UiRadioComponent } from '../inputs/ui-radio/ui-radio.component';
import { UiSelectComponent } from '../inputs/ui-select/ui-select.component';

@Component({
  selector: 'lib-form-field',
  imports: [UiInputComponent, UiCheckboxComponent, UiRadioComponent, UiSelectComponent],
  templateUrl: './ui-form-fields.component.html',
  styleUrl: './ui-form-fields.component.scss'
})
export class UiFormFieldsComponent {
  public fieldTypes = FieldTypes;
  @Input() fieldType: FieldTypes = FieldTypes.input;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() subType: InputTypes = InputTypes.text; //For Input
  @Input() checkboxStyle: CheckboxStyle = CheckboxStyle.box;
  @Input() options: Option[] = [];
  @Input() radioStyle: RadioStyle = RadioStyle.vertical;
  @Input() selectStyle: SelectStyle = SelectStyle.basic;
  @Input() size: Size = Size.medium;
}
