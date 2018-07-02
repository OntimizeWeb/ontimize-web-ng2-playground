import { Component, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';

import { TableUtils } from '../table-utils';
import { OTableComponent } from "ontimize-web-ngx";

@Component({
  selector: 'table-horizontal-scroll',
  templateUrl: 'table-horizontal-scroll.component.html'
})
export class TableHorizontalScrollComponent implements AfterViewInit {


  @ViewChild('horizontalScrollToggle')
  horizontalScrollToggle: any = true;

  // @ViewChild('minwWdth')
  // minwWdth: any;

  @ViewChild('table')
  table: OTableComponent;

  ngAfterViewInit(): void {
    if (this.table) {
      this.table.updateScrolledState();
    }
  }

  onToggleChange(val) {
    if (this.table) {
      this.table.horizontalScroll = val.checked;
      this.table.updateScrolledState();
    }
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getAccountsTableFixed();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    const itemData: any = {
      horizontalScroll: this.horizontalScrollToggle.checked
    };
    exampleComp.html = TableUtils.getHtml(key, table, itemData);
  }

}
