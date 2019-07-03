import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Department } from './Department';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url = "https://localhost:44368/api/departments"

  constructor(private http: HttpClient) { }

  GetAllDepartment(): Observable<Department[]>{
    return this.http.get<Department[]>(this.url)
  }

  GetDepartment(id: number) : Observable<Department>
  {
    return this.GetAllDepartment().pipe(map((departments: Department[]) => departments.find(d => d.id == id)))
  }
}
