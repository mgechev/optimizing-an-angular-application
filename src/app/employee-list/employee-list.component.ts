import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';

import { EmployeeData } from '../shared/list-generator.service';

@Component({
  selector: 'sd-employee-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 title="Department">{{ department }}</h1>
    <sd-name-input (add)="add.emit($event)"></sd-name-input>
    <sd-list (remove)="remove.emit($event)" [data]="data"></sd-list>
  `,
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent {
  @Input() data: List<EmployeeData>;
  @Input() department: string;

  @Output() remove = new EventEmitter<EmployeeData>();
  @Output() add = new EventEmitter<string>();
}
