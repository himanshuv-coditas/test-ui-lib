import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, signal } from '@angular/core';
import { AbstractControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTypes } from '../../../types/app';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
  selector: 'lib-input',
  imports: [InputTextModule, CommonModule, FormsModule, AutoCompleteModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UiInputComponent),
      multi: true
    }
  ],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss'
})
export class UiInputComponent {
  @Input() label: string = 'text';
  @Input() inputType: string = 'text';
  @Input() placeholder: string = '';
  @Input() invalid: boolean = false;
  public readonly inputTypes = InputTypes;

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

  onInputChange(val: Event) {
    this.value = (val.target as HTMLInputElement).value;
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
