import { Component, OnInit } from '@angular/core';
import { Department } from '../Department';
import { DepartmentService } from '../Department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-DepartmentDetail',
  templateUrl: './DepartmentDetail.component.html',
  styleUrls: ['./DepartmentDetail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public department: Department

  constructor(private service: DepartmentService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    this.service.GetDepartment(id).subscribe(d => this.department = d)
  }
}
