import { Component, OnInit, Injector } from '@angular/core';

import { NavigationBarService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'app-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})
export class MainComponent implements OnInit {

  protected sectionTitle: string = '';

  constructor(protected navigationService: NavigationBarService) {

  }

  ngOnInit() {
    this.navigationService.onTitleChange((title) => {
      this.sectionTitle = title;
    });
  }

}
