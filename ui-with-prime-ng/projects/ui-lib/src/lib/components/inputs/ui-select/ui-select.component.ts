import { Component, Input } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Option, SelectStyle } from '../../../types/app';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'lib-select',
  imports: [DropdownModule, FormsModule, CommonModule, MultiSelectModule],
  templateUrl: './ui-select.component.html',
  styleUrl: './ui-select.component.scss'
})
export class UiSelectComponent {
  @Input() selectStyle: SelectStyle = SelectStyle.basic;
  @Input() options: Option[] = [];
  @Input() placeholder: string = '';
  public selectedValue: string | null = null;
  public readonly selectStyles = SelectStyle;
}
