import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SalaryService {
  private apiUrl = 'http://localhost:8000/api/employees';

  constructor(private http: HttpClient) {}

  createSalary(employeeId: number, salary: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${employeeId}/salaries`, salary);
  }

  deleteSalary(employeeId: number, fromDate: string): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${employeeId}/salaries/${fromDate}`
    );
  }
}
