import { Component, forwardRef, Input } from '@angular/core';
import { TextareaModule } from 'primeng/textarea';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, AbstractControl, ValidationErrors, FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-textarea',
  imports: [TextareaModule, CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UiTextareaComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => UiTextareaComponent),
      multi: true
    }
  ],
  templateUrl: './ui-textarea.component.html',
  styleUrl: './ui-textarea.component.scss'
})
export class UiTextareaComponent {
  @Input() placeholder: string = '';
  @Input() rows: number = 5;
  @Input() cols: number = 30;
  @Input() label: string = '';
  @Input() inputType: string = 'textarea';
  @Input() invalid: boolean = false;

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

  onInputChange(val: string) {
    this.value = val;
    this.onChange(this.value);
    this.onTouched();
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
