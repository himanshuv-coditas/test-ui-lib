import type { Meta, StoryObj } from '@storybook/angular';
import { UiTextareaComponent } from '../lib/components/inputs/ui-textarea/ui-textarea.component';

const meta: Meta<UiTextareaComponent> = {
  title: 'Ui/Textarea',
  component: UiTextareaComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiTextareaComponent>;

export const Basic: Story = {
  args: {
    label: 'Textarea',
    placeholder: 'Enter text...',
    rows: 5,
    cols: 30,
  },
}; 