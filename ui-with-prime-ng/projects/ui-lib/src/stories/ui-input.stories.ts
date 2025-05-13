import type { Meta, StoryObj } from '@storybook/angular';
import { UiInputComponent } from '../lib/components/inputs/ui-input/ui-input.component';
import { InputTypes } from '../lib/types/app';

const meta: Meta<UiInputComponent> = {
  title: 'UI/Input',
  component: UiInputComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiInputComponent>;

export const Text: Story = {
  args: {
    label: 'Text Input',
    inputType: InputTypes.text,
    placeholder: 'Enter text',
  },
};

export const Email: Story = {
  args: {
    label: 'Email Input',
    inputType: InputTypes.email,
    placeholder: 'Enter email',
  },
}; 