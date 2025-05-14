import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TableData } from '../../types/app';

@Component({
  selector: 'lib-table',
  imports: [TableModule],
  standalone: true,
  templateUrl: './ui-table.component.html',
  styleUrl: './ui-table.component.scss',
})
export class UiTableComponent {
  @Input() tableData: TableData[] = [];
  @Input() public paginator: boolean = false;
  @Input() public rows: number = 5;
  @Input() public totalRecords!: number;
  @Input() public rowsPerPageOptions: number[] = [];
  @Input() public sortable: boolean = false;

  constructor() {}
}
