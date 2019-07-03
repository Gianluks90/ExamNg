import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from './Employee';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url = "https://localhost:44368/api/employees"

  constructor(private http : HttpClient) { }

  GetAllEmployee(): Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.url)
  }

  GetEmployeesByDepartmentId(id: number) : Observable<Employee[]>
  {
    return this.GetAllEmployee().pipe(map((employee : Employee[]) => employee.filter(e => e.id == id)))
  }
}
