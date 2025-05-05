import { Component } from '@angular/core';
import { CardTypes, CheckboxStyle, FieldTypes, InputTypes, Option, RadioStyle, SelectStyle, Size } from '../../../../../projects/ui-lib/src/lib/types/app';
import { UiFormFieldsComponent } from '../../../../../projects/ui-lib/src/lib/components/ui-form-fields/ui-form-fields.component';
import { UiCardComponent } from "../../../../../projects/ui-lib/src/lib/components/ui-card/ui-card.component";

@Component({
  selector: 'app-inputs',
  imports: [UiFormFieldsComponent, UiCardComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss'
})
export class InputsComponent {
  public readonly fieldTypes = FieldTypes;
  public readonly cardTypes = CardTypes;
  public readonly inputTypes = InputTypes;
  public readonly checkboxStyle = CheckboxStyle;
  public readonly radioStyle = RadioStyle;
  public readonly selectStyle = SelectStyle;
  public readonly size = Size;
  public readonly options: Option[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  public selectPlaceholder = 'Select Options';
}
