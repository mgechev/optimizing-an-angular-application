import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { EmployeeListModule } from './employee-list/employee-list.module';

import { ListGenerator } from './shared/list-generator.service';
<<<<<<< HEAD
import { EmployeeService } from './shared/employee.service';
=======
>>>>>>> 687f2b9e864c16bda345009c42a724ca42c91b08

@NgModule({
  imports: [BrowserModule, EmployeeListModule],
  providers: [ListGenerator, EmployeeService],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
