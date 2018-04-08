import { Component, OnInit } from '@angular/core';

import { ListGenerator, EmployeeData } from './shared/list-generator.service';
import { Names } from './shared/names';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'sd-app',
  template: `
    <sd-employee-list
      [data]="salesList"
      department="Sales"
      (add)="add(salesList, $event)"
      (remove)="remove(salesList, $event)"
    ></sd-employee-list>

    <sd-employee-list
      [data]="rndList"
      department="R&D"
      (add)="add(rndList, $event)"
      (remove)="remove(rndList, $event)"
    ></sd-employee-list>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  salesList: EmployeeData[];
  rndList: EmployeeData[];
  label: string;

  constructor(private generator: ListGenerator) {}

  ngOnInit() {
    this.salesList = this.generator.generate(Names, NumRange, 10);
    this.rndList = this.generator.generate(Names, NumRange, 10);
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }
}
