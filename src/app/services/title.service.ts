// src/app/services/title.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  private apiUrl = 'http://localhost:8000/api/employees';

  constructor(private http: HttpClient) {}

  createTitle(employeeId: number, title: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${employeeId}/titles`, title);
  }

  deleteTitle(
    employeeId: number,
    title: string,
    fromDate: string
  ): Observable<any> {
    return this.http.delete(
      `${this.apiUrl}/${employeeId}/titles/${title}/${fromDate}`
    );
  }
}
