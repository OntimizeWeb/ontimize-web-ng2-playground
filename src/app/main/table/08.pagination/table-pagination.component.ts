import { Component, OnInit } from '@angular/core';
import { OTranslateService } from 'ontimize-web-ngx';

import { TableUtils } from '../table-utils';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

@Component({
  selector: 'table-pagination',
  templateUrl: 'table-pagination.component.html'
})
export class TablePaginationComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService
  ) { }

  ngOnInit() {
    let title = this.translateService.get('TABLE');
    this.navigationService.setTitle(title);
  }

  getFiles(key: string) {
    return TableUtils.getFiles(key);
  }

  getTableData(): Array<any> {
    return TableUtils.getBranches().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

}
