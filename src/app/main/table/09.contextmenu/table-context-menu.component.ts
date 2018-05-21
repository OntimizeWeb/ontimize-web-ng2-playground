import { Component, OnInit } from '@angular/core';
import { OTranslateService, Util } from 'ontimize-web-ngx';

import { TableUtils } from '../table-utils';
import { NavigationBarService } from '../../../shared/navigation-bar.service';

@Component({
  selector: 'table-context-menu',
  templateUrl: 'table-context-menu.component.html'
})
export class TableContextMenuComponent implements OnInit {

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
    return TableUtils.getAccounts().slice();
  }

  onShowSource(key: string, table?: any, exampleComp?: any) {
    exampleComp.html = TableUtils.getHtml(key, table, {});
  }

  getVisible(data: any): boolean {
    return Util.parseBoolean(data.COMMISSION);
  }

  onExecute(text: string, event: any): void {
    alert('Clicked menu element: ' + text + '\n' + event.data.NAME);
  }

}
