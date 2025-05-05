import { Injectable } from '@angular/core';
import { TableData } from '../../../../../projects/ui-lib/src/lib/types/app';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public tableData: any[] = [
    { code: '1000', name: 'Product 1', category: 'Category 1', quantity: 100 },
    { code: '1001', name: 'Product 2', category: 'Category 2', quantity: 200 },
  ];
  public tableDataForPagination: any[] = [
    { code: '1000', name: 'Product 1', category: 'Category 1', quantity: 100 },
    { code: '1001', name: 'Product 2', category: 'Category 2', quantity: 200 },
    { code: '1002', name: 'Product 3', category: 'Category 3', quantity: 300 },
    { code: '1003', name: 'Product 4', category: 'Category 4', quantity: 400 },
    { code: '1004', name: 'Product 5', category: 'Category 5', quantity: 500 },
    { code: '1005', name: 'Product 6', category: 'Category 6', quantity: 600 },
    { code: '1006', name: 'Product 7', category: 'Category 7', quantity: 700 },
    { code: '1007', name: 'Product 8', category: 'Category 8', quantity: 800 },
    { code: '1008', name: 'Product 9', category: 'Category 9', quantity: 900 },
    { code: '1009', name: 'Product 10', category: 'Category 10', quantity: 1000 },
    { code: '1010', name: 'Product 11', category: 'Category 11', quantity: 1100 },
    { code: '1011', name: 'Product 12', category: 'Category 12', quantity: 1200 },
    { code: '1012', name: 'Product 13', category: 'Category 13', quantity: 1300 },
    { code: '1013', name: 'Product 14', category: 'Category 14', quantity: 1400 },
    { code: '1014', name: 'Product 15', category: 'Category 15', quantity: 1500 },
    { code: '1015', name: 'Product 16', category: 'Category 16', quantity: 1600 },
  ];
  constructor() { }

  public getTableData(): TableData[] {
    return this.tableData;
  }

  public getTableDataForPagination(): TableData[] {
    return this.tableDataForPagination;
  }
}
