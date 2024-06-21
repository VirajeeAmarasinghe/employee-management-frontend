import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.loadEmployee();
  }

  loadEmployee() {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(+id!).subscribe((data) => {
      this.employee = data;
    });
  }
}
