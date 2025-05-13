import type { Meta, StoryObj } from '@storybook/angular';
import { UiTypographyComponent } from '../lib/components/ui-typography/ui-typography.component';
import { TypographyVariant } from '../lib/types/app';

const meta: Meta<UiTypographyComponent> = {
  title: 'UI/Typography',
  component: UiTypographyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiTypographyComponent>;

export const Heading1: Story = {
  args: {
    tag: TypographyVariant.h1,
    label: 'Heading 1',
    variant: '',
    color: '',
    background: '',
  },
};

export const Subtitle: Story = {
  args: {
    tag: TypographyVariant.subtitle,
    label: 'Subtitle',
    variant: '',
    color: '',
    background: '',
  },
}; 