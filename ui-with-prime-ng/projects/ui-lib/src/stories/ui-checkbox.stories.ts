import type { Meta, StoryObj } from '@storybook/angular';
import { UiCheckboxComponent } from '../lib/components/inputs/ui-checkbox/ui-checkbox.component';
import { CheckboxStyle } from '../lib/types/app';

const meta: Meta<UiCheckboxComponent> = {
  title: 'UI/Checkbox',
  component: UiCheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiCheckboxComponent>;

export const Box: Story = {
  args: {
    label: 'Box Checkbox',
    checkboxStyle: CheckboxStyle.box,
  },
};

export const Switch: Story = {
  args: {
    label: 'Switch Checkbox',
    checkboxStyle: CheckboxStyle.switch,
  },
}; 