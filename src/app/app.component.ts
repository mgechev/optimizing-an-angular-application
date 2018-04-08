import { Component, OnInit, NgZone, ChangeDetectorRef } from '@angular/core';
import { List } from 'immutable';

import { ListGenerator, EmployeeData } from './shared/list-generator.service';
import { Names } from './shared/names';

import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';
import { EmployeeService, Command } from './shared/employee.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { buffer } from 'rxjs/operators';

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

  private buffer: Command[];

  constructor(private generator: ListGenerator, private service: EmployeeService) {}

  ngOnInit() {
    this.salesList = List(Sales);
    this.rndList = List(Rnd);
    this.service.commands$.subscribe(c => this.handleCommand(c));
  }

  add(list: EmployeeData[], name: string) {
    return list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    return list.splice(list.indexOf(node), 1);
  }

  private handleCommand(m: Command) {
    let list = 'rndList';
    if (m.department === 'sales') {
      list = 'salesList';
    }
    if (m.action === 'add') {
      this[list] = this.add(this[list], this.generator.generateLabel(Names));
    } else {
      this[list] = this.remove(this[list], this[list].get(Math.floor(Math.random() * this[list].size)));
    }
  }
}
