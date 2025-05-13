import type { Meta, StoryObj } from '@storybook/angular';
import { UiTableComponent } from '../lib/components/ui-table/ui-table.component';
import { TableData } from '../lib/types/app';

const meta: Meta<UiTableComponent> = {
  title: 'UI/Table',
  component: UiTableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<UiTableComponent>;

const sampleData: TableData[] = [
  { code: 'A1', name: 'Apple', category: 'Fruit', quantity: 10 },
  { code: 'B2', name: 'Banana', category: 'Fruit', quantity: 20 },
  { code: 'C3', name: 'Carrot', category: 'Vegetable', quantity: 15 },
];

export const Basic: Story = {
  args: {
    tableData: sampleData,
    paginator: false,
    rows: 5,
    totalRecords: 3,
    rowsPerPageOptions: [5, 10, 20],
    sortable: false,
  },
};

export const WithPagination: Story = {
  args: {
    tableData: sampleData,
    paginator: true,
    rows: 2,
    totalRecords: 3,
    rowsPerPageOptions: [2, 5, 10],
    sortable: true,
  },
}; 