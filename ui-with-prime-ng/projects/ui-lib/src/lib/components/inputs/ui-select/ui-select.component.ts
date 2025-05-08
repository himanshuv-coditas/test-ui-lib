import { Component, forwardRef, Input } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Option, SelectStyle } from '../../../types/app';
import { AbstractControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'lib-select',
  imports: [DropdownModule, FormsModule, CommonModule, MultiSelectModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiSelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UiSelectComponent),
      multi: true
    }
  ],
  templateUrl: './ui-select.component.html',
  styleUrl: './ui-select.component.scss'
})
export class UiSelectComponent {
  @Input() selectStyle: SelectStyle = SelectStyle.basic;
  @Input() options: Option[] = [];
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() invalid: boolean = false;
  public readonly selectStyles = SelectStyle;

  value: any = '';
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

  onSelectChange(val: Event) {
    this.value = val;
    this.onChange(this.value);
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.value) {
      return { required: true };
    }
    return null;
  }
}
