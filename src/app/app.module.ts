import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { EmployeeListModule } from './employee-list/employee-list.module';

import { ListGenerator } from './shared/list-generator.service';

import { EmployeeService } from './shared/employee.service';


@NgModule({
  imports: [BrowserModule, EmployeeListModule],
  providers: [ListGenerator, EmployeeService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
