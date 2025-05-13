import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { UiToastComponent } from '../lib/components/ui-toast/ui-toast.component';
import { MessageService } from 'primeng/api';

const meta: Meta<UiToastComponent> = {
  title: 'UI/Toast',
  component: UiToastComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      providers: [
        MessageService
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<UiToastComponent>;

export const Basic: Story = {
  args: {},
}; 