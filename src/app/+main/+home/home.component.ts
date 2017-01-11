import { Component, OnInit } from '@angular/core';

import { OTranslateService } from 'ontimize-web-ng2/ontimize';

import { NavigationBarService } from '../../shared';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    protected navigationService: NavigationBarService,
    protected translateService: OTranslateService) {
  }

  ngOnInit() {
    let title = '';
    title = this.translateService.get('INTRODUCTION');
    this.navigationService.setTitle(title);
  }


}
