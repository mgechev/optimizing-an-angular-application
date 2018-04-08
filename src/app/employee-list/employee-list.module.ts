import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatListModule, MatCommonModule, MatChipsModule } from '@angular/material';

import { EmployeeListComponent } from './employee-list.component';
import { ListComponent } from './list/list.component';
import { NameInputComponent } from './name-input/name-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule
  ],
  declarations: [EmployeeListComponent, ListComponent, NameInputComponent],
  exports: [EmployeeListComponent]
})
export class EmployeeListModule {}
