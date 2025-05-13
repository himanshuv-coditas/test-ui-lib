import type { Meta, StoryObj } from '@storybook/angular';
import { UiSelectComponent } from '../lib/components/inputs/ui-select/ui-select.component';
import { SelectStyle, Option } from '../lib/types/app';

const meta: Meta<UiSelectComponent> = {
  title: 'UI/Select',
  component: UiSelectComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiSelectComponent>;

const options: Option[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

export const Basic: Story = {
  args: {
    label: 'Select',
    placeholder: 'Choose...',
    options,
    selectStyle: SelectStyle.basic,
  },
};

export const Multiple: Story = {
  args: {
    label: 'Select Multiple',
    placeholder: 'Choose...',
    options,
    selectStyle: SelectStyle.multiple,
  },
}; 