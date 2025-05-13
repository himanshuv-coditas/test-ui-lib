import type { Meta, StoryObj } from '@storybook/angular';
import { UiRadioComponent } from '../lib/components/inputs/ui-radio/ui-radio.component';
import { RadioStyle, Option } from '../lib/types/app';

const meta: Meta<UiRadioComponent> = {
  title: 'UI/Radio',
  component: UiRadioComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiRadioComponent>;

const options: Option[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

export const Vertical: Story = {
  args: {
    options,
    radioStyle: RadioStyle.vertical,
  },
};

export const Horizontal: Story = {
  args: {
    options,
    radioStyle: RadioStyle.horizontal,
  },
}; 