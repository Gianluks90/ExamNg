import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterPageComponent } from './Master-page/Master-page.component';
import { DepartmentService } from './Department/Department.service';
import { EmployeeService } from './Employee/Employee.service';
import { DepartmentComponent } from './Department/Department.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { DepartmentDetailComponent } from './Department/DepartmentDetail/DepartmentDetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [
      AppComponent,
      MasterPageComponent,
      DepartmentComponent,
      EmployeeComponent,
      DepartmentDetailComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule
   ],
   providers: [
      DepartmentService, 
      EmployeeService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
