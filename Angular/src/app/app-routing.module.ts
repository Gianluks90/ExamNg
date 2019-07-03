import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentComponent } from './Department/Department.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { MasterPageComponent } from './Master-page/Master-page.component';
import { DepartmentDetailComponent } from './Department/DepartmentDetail/DepartmentDetail.component';

const routes: Routes = [
  {
    path: "",
    component: MasterPageComponent
  },
  {
    path: "Department",
    component: DepartmentComponent
  },
  {
    path: "DepartmentDetail/:id",
    component: DepartmentDetailComponent
  },
  {
    path: "Employee",
    component: EmployeeComponent
  },
  {
    path: "**",
    component: MasterPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
