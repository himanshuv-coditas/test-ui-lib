import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { UiCardComponent } from '../lib/components/ui-card/ui-card.component';
import { CardTypes } from '../lib/types/app';

const meta: Meta<UiCardComponent> = {
  title: 'Ui/Card',
  component: UiCardComponent,
  decorators: [
    moduleMetadata({
      imports: [UiCardComponent],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    cardType: {
      control: 'select',
      options: Object.values(CardTypes),
    },
    header: { control: 'text' },
    subHeader: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<UiCardComponent>;

export const BasicCard: Story = {
  args: {
    cardType: CardTypes.basic,
    header: 'Basic Card Header',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-card [cardType]="cardType" [header]="header">
        This is the content of a basic card.
      </lib-card>
    `,
  }),
};

export const AdvancedCard: Story = {
  args: {
    cardType: CardTypes.advanced,
    header: 'Advanced Card Header',
    subHeader: 'Advanced Subheader',
  },
  render: (args) => ({
    props: args,
    template: `
      <lib-card [cardType]="cardType" [header]="header" [subHeader]="subHeader">
        <div content>This is advanced card content.</div>
        <div footer>Footer content goes here.</div>
      </lib-card>
    `,
  }),
};
