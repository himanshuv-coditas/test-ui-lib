import { CardTypes, TableData } from './../../../../../projects/ui-lib/src/lib/types/app';
import { Component, inject } from '@angular/core';
import { UiTableComponent } from '../../../../../projects/ui-lib/src/lib/components/ui-table/ui-table.component';
import { UiCardComponent } from "../../../../../projects/ui-lib/src/lib/components/ui-card/ui-card.component";
import { TableService } from '../../services/table/table.service';
@Component({
  selector: 'app-table',
  imports: [UiTableComponent, UiCardComponent, UiCardComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  public readonly cardTypes = CardTypes;
  public tableData: TableData[] = [];
  public tableDataForPagination: TableData[] = [];
  public rows: number = 5;
  public totalRecords: number = 100;
  public rowsPerPageOptions: number[] = [5, 10, 15, 20];
  private tableService: TableService = inject(TableService);

  ngOnInit(): void {
    this.tableData = this.tableService.getTableData();
    this.tableDataForPagination = this.tableService.getTableDataForPagination();
    this.totalRecords = this.tableDataForPagination.length;
  }
}
