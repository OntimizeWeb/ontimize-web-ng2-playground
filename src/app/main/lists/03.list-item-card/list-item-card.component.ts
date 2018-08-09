import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { ListsUtils } from '../lists-utils';

const LIST_ITEM_CARD_HTML_DATA = `
<o-list #list attr="list" [title]="{title}" columns="id;name;username;email;street;phone" keys="id"
  [static-data]="getStaticData()" refresh-button="{refreshButton}" row-height="{rowHeight}" insert-button="{insertButton}"
  quick-filter="{quickFilter}">

  <o-list-item *ngFor="let row of list.dataArray">
    <o-list-item-card #itemCard title="{{ row.username }}" subtitle="{{ row.name }}" show-image="{showImage}" image="{{ row.image }}"
      action-1-text="{actionText1}" action-2-text="{actionText2}"
      (action-1)="onAction1()" (action-2)="onAction2()">
    </o-list-item-card>
  </o-list-item>

</o-list>
`;

@Component({
  selector: 'list-item-card',
  templateUrl: './list-item-card.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ListItemCardComponent {

  iconPosition: String = 'right';

  @ViewChild('cardListTitle')
  cardListTitle: any;
  @ViewChild('insertButtonToggle')
  insertButtonToggle: any;
  @ViewChild('refreshButtonToggle')
  refreshButtonToggle: any;
  @ViewChild('quickFilterToggle')
  quickFilterToggle: any;
  @ViewChild('showImageToggle')
  showImageToggle: any;
  @ViewChild('action1Toggle')
  action1Toggle: any;
  @ViewChild('action2Toggle')
  action2Toggle: any;
  @ViewChild('rowHeight')
  rowHeight: any;
  @ViewChild('actionText1')
  actionText1: any;
  @ViewChild('actionText2')
  actionText2: any;

  files = {
    'html': {
      'data': LIST_ITEM_CARD_HTML_DATA
    },
    'scss': {
      'data': undefined
    },
    'typescript': {
      'data': undefined
    }
  };

  onAction1() {
    alert('onAction1');
  }

  onAction2() {
    alert('onAction2');
  }

  onIconAction() {
    alert('onIconAction');
  }

  getStaticData() {
    return ListsUtils.getListData()
  }

  onShowSource(list?: any, exampleComp?: any) {
    const itemData: any = {};

    list.title = this.cardListTitle.nativeElement.value;
    list.refreshButton = this.refreshButtonToggle.checked;
    list.quickFilter = this.quickFilterToggle.checked;
    list.insertButton = this.insertButtonToggle.checked;
    itemData.showImage = this.showImageToggle.checked;
    itemData.actionText1 = this.actionText1.nativeElement.value;
    itemData.actionText2 = this.actionText2.nativeElement.value;

    exampleComp.html = ListsUtils.replaceHtml(LIST_ITEM_CARD_HTML_DATA, list, itemData);
  }

}
