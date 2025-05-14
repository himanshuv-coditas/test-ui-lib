import { Meta, StoryObj } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import {
  TypographyVariant,
  TypographyColor,
  TypographyBackground
} from '../lib/types/app'; // Adjust path if needed
import { UiTypographyComponent } from '../public-api';

export default {
  title: 'Ui/Typography',
  component: UiTypographyComponent,
  tags: ['autodocs'],
  argTypes: {
    tag: {
      control: 'select',
      options: Object.values(TypographyVariant),
      description: 'HTML tag / Typography variant',
    },
    variant: {
      control: 'text',
      description: 'CSS class for additional typography styling (e.g., font size, weight)',
    },
    color: {
      control: 'select',
      options: Object.values(TypographyColor),
      description: 'CSS class for text color',
    },
    background: {
      control: 'select',
      options: Object.values(TypographyBackground),
      description: 'CSS class for background color',
    },
    label: {
      control: 'text',
      description: 'Text content to render',
    },
  },
} as Meta<UiTypographyComponent>;

const baseArgs = {
  variant: 'font-bold text-xl',
  color: TypographyColor.textPrimary,
  background: '',
  label: 'Hello Typography',
};

export const Heading1: StoryObj<UiTypographyComponent> = {
  args: {
    ...baseArgs,
    tag: TypographyVariant.h1,
  },
};

export const Heading2: StoryObj<UiTypographyComponent> = {
  args: {
    ...baseArgs,
    tag: TypographyVariant.h2,
    variant: 'font-semibold text-lg',
  },
};

export const Heading3: StoryObj<UiTypographyComponent> = {
  args: {
    ...baseArgs,
    tag: TypographyVariant.h3,
    variant: 'text-lg',
  },
};

export const Subtitle: StoryObj<UiTypographyComponent> = {
  args: {
    ...baseArgs,
    tag: TypographyVariant.subtitle,
    color: TypographyColor.textSecondary,
    variant: 'italic text-sm',
  },
};

export const Paragraph: StoryObj<UiTypographyComponent> = {
  args: {
    ...baseArgs,
    tag: TypographyVariant.p,
    variant: 'text-base',
    color: TypographyColor.textGrayDark,
  },
};

export const WithBackground: StoryObj<UiTypographyComponent> = {
  args: {
    ...baseArgs,
    tag: TypographyVariant.h4,
    background: TypographyBackground.warning,
    color: TypographyColor.textWarning,
    variant: 'p-2 rounded',
  },
};
