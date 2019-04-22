import { Component, OnInit } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import * as faker from 'faker';
import { utils } from './../data-table/data-table.utils';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  subject$: BehaviorSubject<any> = new BehaviorSubject([]);
  modelGroup: any[] = utils.modelGroup;
  models: any[] = utils.models;

  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    const modelGroup = [...utils.modelGroup, { label: 'Donut', name: 'donut', visible: true, type: 'textarea', filter: true }];
    this.subject$.next(modelGroup);
    this.models = utils.onPopulateData(5);
  }

}
