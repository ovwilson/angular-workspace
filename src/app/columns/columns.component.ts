import { Component, OnInit } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { Observable, of, BehaviorSubject } from 'rxjs';
import * as faker from 'faker';
import { utils } from './../data-table/data-table.utils';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
  animations: [
    trigger('flyOut', [
      state('in', style({ 'opacity': '1', 'transform': 'translateX(0)' })),
      state('out', style({ 'opacity': '1', 'transform': 'translateX(-100%)' })),
      transition('in => out', animate(600, style({ 'transform': 'translateX(-100%)' }))),
      // tslint:disable-next-line:object-literal-key-quotes
      transition('out => in', animate(600, style({ 'transform': 'translateX(0)' })))
    ]),
    trigger('flyIn', [
      state('in', style({ 'opacity': '1', 'transform': 'translateX(100%)' })),
      state('out', style({ 'opacity': '1', 'transform': 'translateX(0)' })),
      // transition('void => n', style({ 'opacity': '0' })),
     transition('in => out', animate(600, style({ 'transform': 'translateX(0)' }))),
      transition('out => in', animate(600, style({ 'transform': 'translateX(100%)' })))
    ])
  ]
})
export class ColumnsComponent implements OnInit {

  subject$: BehaviorSubject<any> = new BehaviorSubject([]);
  modelGroup: any[] = utils.modelGroup;
  models: any[] = utils.models;
  animateState = 'in';

  constructor() { }

  ngOnInit() {
  }

  buttonClick() {
    const modelGroup = [...utils.modelGroup, { label: 'Donut', name: 'donut', visible: true, type: 'textarea', filter: true }];
    this.subject$.next(modelGroup);
    this.models = utils.onPopulateData(5);
  }

  animateOut() {
    this.animateState = 'out';
  }
  animateIn() {
    this.animateState = 'in';
  }
}
