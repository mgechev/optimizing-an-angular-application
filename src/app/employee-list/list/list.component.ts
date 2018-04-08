import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { EmployeeData } from '../../shared/list-generator.service';

@Component({
  selector: 'sd-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() data: List<EmployeeData>;
  @Output() remove = new EventEmitter<EmployeeData>();
}
