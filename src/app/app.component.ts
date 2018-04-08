import { Component, OnInit } from '@angular/core';
import { List } from 'immutable';

import { ListGenerator, EmployeeData } from './shared/list-generator.service';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'sd-app',
  template: `
    <sd-employee-list
      [data]="salesList"
      department="Sales"
      (add)="salesList = add(salesList, $event)"
      (remove)="salesList = remove(salesList, $event)"
    ></sd-employee-list>

    <sd-employee-list
      [data]="rndList"
      department="R&D"
      (add)="rndList = add(rndList, $event)"
      (remove)="rndList = remove(rndList, $event)"
    ></sd-employee-list>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  salesList: List<EmployeeData>;
  rndList: List<EmployeeData>;
  label: string;

  constructor(private generator: ListGenerator) {}

  ngOnInit() {
    this.salesList = List(Sales);
    this.rndList = List(Rnd);
  }

  add(list: EmployeeData[], name: string) {
    return list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }
}
