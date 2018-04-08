import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sd-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {
  @Output() add = new EventEmitter<string>();
  label: string;

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }
}
