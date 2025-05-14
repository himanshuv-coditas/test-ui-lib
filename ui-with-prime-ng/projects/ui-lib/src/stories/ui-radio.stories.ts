import { Meta, StoryObj } from '@storybook/angular';
import { UiRadioComponent } from '../lib/components/inputs/ui-radio/ui-radio.component';
import { Option, RadioStyle } from '../lib/types/app';

const options: Option[] = [
  { label: 'Option A', value: 'A' },
  { label: 'Option B', value: 'B' },
  { label: 'Option C', value: 'C' },
];

const meta: Meta<UiRadioComponent> = {
  title: 'Ui/Radio',
  component: UiRadioComponent,
  tags: ['autodocs'],
  argTypes: {
    radioStyle: {
      control: { type: 'select' },
      options: Object.values(RadioStyle),
    },
    options: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<UiRadioComponent>;

export const Vertical: Story = {
  args: {
    radioStyle: RadioStyle.vertical,
    options,
  },
};

export const Horizontal: Story = {
  args: {
    radioStyle: RadioStyle.horizontal,
    options,
  },
};

export const Disabled: Story = {
  args: {
    radioStyle: RadioStyle.disabled,
    options,
  },
};
