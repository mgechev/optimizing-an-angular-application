import { OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/webSocket';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';

export interface Command {
  action: 'add' | 'delete';
  department: 'sales' | 'rnd';
}

export class EmployeeService implements OnDestroy {
  private _commands$: WebSocketSubject<Command>;

  constructor() {
    this._commands$ = Observable.webSocket('ws://localhost:5555');
  }

  ngOnDestroy() {
    this._commands$.unsubscribe();
  }

  get commands$() {
    return this._commands$;
  }
}
