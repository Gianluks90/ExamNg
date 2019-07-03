import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee';
import { EmployeeService } from './Employee.service';
import { Department } from '../Department/Department';
import { DepartmentService } from '../Department/Department.service';
import { FormsModule } from "@angular/forms"


@Component({
  selector: 'app-Employee',
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public employee : Employee[]

  selectValue : number
  inputValue : number
  allDepartments : Department[]

  constructor(private service: EmployeeService, private depService: DepartmentService) { }
  
  ngOnInit() {
    this.depService.GetAllDepartment().subscribe(
      data => this.allDepartments = data
    )

    this.service.GetAllEmployee().subscribe(
      data => this.employee = data
    )
  }

  ToSelect() {
    this.service.GetEmployeesByDepartmentId(this.selectValue).subscribe(data => this.employee = data)
  }
}
