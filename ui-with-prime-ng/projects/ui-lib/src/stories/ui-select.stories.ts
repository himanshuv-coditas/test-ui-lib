import { Meta, StoryObj } from '@storybook/angular';
import { UiSelectComponent } from '../lib/components/inputs/ui-select/ui-select.component';
import { Option, SelectStyle } from '../lib/types/app';

const options: Option[] = [
  { label: 'Option 1', value: 'Option 1' },
  { label: 'Option 2', value: 'Option 2' },
  { label: 'Option 3', value: 'Option 3' },
];

const meta: Meta<UiSelectComponent> = {
  title: 'Ui/Select',
  component: UiSelectComponent,
  tags: ['autodocs'],
  argTypes: {
    selectStyle: {
      control: 'select',
      options: Object.values(SelectStyle),
    },
    options: {
      control: 'object',
    },
    placeholder: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    invalid: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<UiSelectComponent>;

export const Basic: Story = {
  args: {
    selectStyle: SelectStyle.basic,
    options,
    label: 'Basic Select',
    placeholder: 'Choose an option',
  },
};

export const Checkmark: Story = {
  args: {
    selectStyle: SelectStyle.checkmark,
    options,
    label: 'Checkmark Select',
    placeholder: 'Choose an option',
  },
};

export const Editable: Story = {
  args: {
    selectStyle: SelectStyle.editable,
    options,
    label: 'Editable Select',
    placeholder: 'Type or choose',
  },
};

export const Filter: Story = {
  args: {
    selectStyle: SelectStyle.filter,
    options,
    label: 'Filterable Select',
    placeholder: 'Search...',
  },
};

export const Clearable: Story = {
  args: {
    selectStyle: SelectStyle.clearable,
    options,
    label: 'Clearable Select',
    placeholder: 'Pick something',
  },
};

export const Multiple: Story = {
  args: {
    selectStyle: SelectStyle.multiple,
    options,
    label: 'Multi Select',
    placeholder: 'Select options',
  },
};

export const Disabled: Story = {
  args: {
    selectStyle: SelectStyle.disabled,
    options,
    label: 'Disabled Select',
    placeholder: 'Disabled',
    invalid: false,
  },
};
