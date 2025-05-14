import { Meta, StoryObj } from '@storybook/angular';
import { UiColorsComponent } from '../lib/components/ui-colors/ui-colors.component';
import { Colors } from '../lib/types/app';

const meta: Meta<UiColorsComponent> = {
  title: 'Ui/Colors',
  component: UiColorsComponent,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: Object.values(Colors),
    },
  },
};

export default meta;
type Story = StoryObj<UiColorsComponent>;

export const Primary: Story = {
  args: {
    color: Colors.primary,
  },
};

export const Secondary: Story = {
  args: {
    color: Colors.secondary,
  },
};

export const Success: Story = {
  args: {
    color: Colors.success,
  },
};

export const Danger: Story = {
  args: {
    color: Colors.danger,
  },
};

export const Warning: Story = {
  args: {
    color: Colors.warning,
  },
};

export const Info: Story = {
  args: {
    color: Colors.info,
  },
};
