import { Component, Input, Output, EventEmitter } from '@angular/core';

import { EmployeeData } from '../shared/list-generator.service';


@Component({
  selector: 'sd-employee-list',
  template: `
    <h1 title="Department">{{ department }}</h1>

    <sd-name-input (add)="add.emit($event)"></sd-name-input>
    <sd-list [data]="data" (remove)="remove.emit($event)"></sd-list>
  `,
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() data: EmployeeData[];
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();

  label: string;

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }
}
