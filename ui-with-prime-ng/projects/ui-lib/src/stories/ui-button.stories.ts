import { Meta, moduleMetadata, StoryFn } from '@storybook/angular';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { UiButtonComponent } from '../public-api';
import { ButtonSize } from '../lib/types/app';

// Mock ActivatedRoute
class MockActivatedRoute {
  snapshot = {
    queryParams: {},
  };
  params = of({});
}

export default {
  title: 'UI/Button',
  component: UiButtonComponent,
  standalone: true,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    severity: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'info', 'warn', 'danger', 'help', 'contrast'],
    },
    size: {
      control: 'select',
      options: ['small', 'normal', 'large'],
    },
    raised: { control: 'boolean' },
    disabled: { control: 'boolean' },
    routerLink: { control: 'text' },
    clickEmitter: { action: 'clicked' },
  },
  decorators: [
    moduleMetadata({
      imports: [RouterModule],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }, // Mock the ActivatedRoute
      ],
    }),
  ],
} as Meta<UiButtonComponent>;

const Template: StoryFn<UiButtonComponent> = (args) => ({
  component: UiButtonComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  severity: 'primary',
  size: ButtonSize.small,
  raised: true,
  disabled: false,
};
