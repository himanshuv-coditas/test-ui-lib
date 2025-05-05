import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTypes } from '../../../types/app';

@Component({
  selector: 'lib-input',
  imports: [InputTextModule, CommonModule, FormsModule],
  templateUrl: './ui-input.component.html',
  styleUrl: './ui-input.component.scss'
})
export class UiInputComponent {
  @Input() label: string = 'text';
  @Input() inputType: string = 'text';
  public readonly inputTypes = InputTypes;
  public inputValue: any;
  public placeholder: string = `Enter ${this.inputType}`;
}
