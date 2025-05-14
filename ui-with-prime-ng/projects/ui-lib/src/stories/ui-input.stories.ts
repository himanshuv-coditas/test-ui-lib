import { Meta, StoryObj } from '@storybook/angular';
import { InputTypes } from '../lib/types/app';
import { UiInputComponent } from '../public-api';

const meta: Meta<UiInputComponent> = {
  title: 'Ui/Input',
  component: UiInputComponent,
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: { type: 'select' },
      options: Object.values(InputTypes),
    },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    invalid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<UiInputComponent>;

export const Text: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    inputType: InputTypes.text,
    invalid: false,
  },
};

export const Email: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    inputType: InputTypes.email,
    invalid: false,
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    inputType: InputTypes.password,
    invalid: false,
  },
};

export const Autocomplete: Story = {
  args: {
    label: 'Autocomplete',
    placeholder: 'Type something...',
    inputType: InputTypes.autocomplete,
    invalid: false,
  },
};

export const InvalidState: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This is required',
    inputType: InputTypes.text,
    invalid: true,
  },
};
