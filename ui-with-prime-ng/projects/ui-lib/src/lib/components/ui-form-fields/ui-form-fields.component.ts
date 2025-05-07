import { Component, forwardRef, Input } from '@angular/core';
import { CheckboxStyle, FieldTypes, InputTypes, Option, RadioStyle, SelectStyle, Size } from '../../types/app';
import { UiCheckboxComponent } from '../inputs/ui-checkbox/ui-checkbox.component';
import { UiInputComponent } from '../inputs/ui-input/ui-input.component';
import { UiRadioComponent } from '../inputs/ui-radio/ui-radio.component';
import { UiSelectComponent } from '../inputs/ui-select/ui-select.component';
import { UiTextareaComponent } from '../inputs/ui-textarea/ui-textarea.component';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-form-field',
  imports: [UiInputComponent, UiTextareaComponent, UiCheckboxComponent, UiRadioComponent, UiSelectComponent],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiFormFieldsComponent),
      multi: true
    }
  ],
  templateUrl: './ui-form-fields.component.html',
  styleUrl: './ui-form-fields.component.scss'
})
export class UiFormFieldsComponent {
  public fieldTypes = FieldTypes;
  @Input() formControl!: FormControl;
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
  @Input() rows: number = 5;
  @Input() cols: number = 30;



  value: any;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(value: any) {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
