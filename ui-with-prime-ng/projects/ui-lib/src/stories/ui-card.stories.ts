import type { Meta, StoryObj } from '@storybook/angular';
import { UiCardComponent } from '../lib/components/ui-card/ui-card.component';
import { CardTypes } from '../lib/types/app';

const meta: Meta<UiCardComponent> = {
  title: 'UI/Card',
  component: UiCardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiCardComponent>;

export const Basic: Story = {
  args: {
    cardType: CardTypes.basic,
    header: 'Basic Card',
    subHeader: '',
  },
};

export const Advanced: Story = {
  args: {
    cardType: CardTypes.advanced,
    header: 'Advanced Card',
    subHeader: 'This is a subheader',
  },
}; 