import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiFormFieldsComponent } from '../lib/components/ui-form-fields/ui-form-fields.component';
import { FieldTypes, Option } from '../lib/types/app';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

const meta: Meta<UiFormFieldsComponent> = {
  title: 'UI/Form Field',
  component: UiFormFieldsComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [ReactiveFormsModule],
    }),
  ],
};

export default meta;
type Story = StoryObj<UiFormFieldsComponent>;

const options: Option[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

export const Input: Story = {
  args: {
    fieldType: FieldTypes.input,
    label: 'Input Field',
    placeholder: 'Enter text',
    formControl: new FormControl(''),
  },
};

export const Select: Story = {
  args: {
    fieldType: FieldTypes.select,
    label: 'Select Field',
    placeholder: 'Choose option',
    options,
    formControl: new FormControl(''),
  },
}; 