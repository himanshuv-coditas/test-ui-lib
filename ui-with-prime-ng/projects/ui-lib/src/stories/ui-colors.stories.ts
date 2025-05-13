import type { Meta, StoryObj } from '@storybook/angular';
import { UiColorsComponent } from '../lib/components/ui-colors/ui-colors.component';
import { Colors } from '../lib/types/app';

const meta: Meta<UiColorsComponent> = {
  title: 'UI/Colors',
  component: UiColorsComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiColorsComponent>;

export const Primary: Story = {
  args: {
    color: Colors.primary,
  },
};

export const Danger: Story = {
  args: {
    color: Colors.danger,
  },
}; 