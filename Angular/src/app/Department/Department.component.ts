import { Component, OnInit } from '@angular/core';
import { Department } from './Department';
import { DepartmentService } from './Department.service';

@Component({
  selector: 'app-Department',
  templateUrl: './Department.component.html',
  styleUrls: ['./Department.component.css']
})
export class DepartmentComponent implements OnInit {

  public departments: Department[]

  constructor(private service: DepartmentService) { }

  ngOnInit() {
    this.service.GetAllDepartment().subscribe(
      data => this.departments = data
    )
  }
}
