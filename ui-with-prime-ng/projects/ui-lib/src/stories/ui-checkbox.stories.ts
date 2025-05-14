import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiCheckboxComponent } from '../lib/components/inputs/ui-checkbox/ui-checkbox.component';
import { CheckboxStyle } from '../lib/types/app';

const meta: Meta<UiCheckboxComponent> = {
  title: 'Ui/Checkbox',
  component: UiCheckboxComponent,
  decorators: [
    moduleMetadata({
      imports: [UiCheckboxComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    checkboxStyle: {
      control: 'select',
      options: Object.values(CheckboxStyle),
    },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<UiCheckboxComponent>;

export const Box: Story = {
  args: {
    label: 'Accept Terms',
    checkboxStyle: CheckboxStyle.box,
  },
};

export const Switch: Story = {
  args: {
    label: 'Enable Notifications',
    checkboxStyle: CheckboxStyle.switch,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Read Only',
    checkboxStyle: CheckboxStyle.disabled,
  },
};
