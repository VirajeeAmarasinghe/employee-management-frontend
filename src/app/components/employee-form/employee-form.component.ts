import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  employeeForm: FormGroup;
  isEditMode: boolean = false;
  employeeId: number = 0;
  employee: any = {};

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.employeeForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birth_date: ['', Validators.required],
      hire_date: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.employeeId = +id;
        this.loadEmployee();
      }
    });
  }

  loadEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe((data) => {
      this.employeeForm.patchValue(data);
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      if (this.isEditMode) {
        this.employeeService
          .updateEmployee(this.employeeId, this.employeeForm.value)
          .subscribe(() => {
            this.router.navigate(['/']);
          });
      } else {
        this.employeeService
          .createEmployee(this.employeeForm.value)
          .subscribe(() => {
            this.router.navigate(['/']);
          });
      }
    }
  }

  removeSalary(employeeId:number) {
    console.log('removed');
  }

  addSalary() {
    console.log('added');
  }

  removeTitle(employeeId:number) {
    console.log('removed');
  }

  addTitle() {
    console.log('added');
  }

  onCancel() {
    console.log('cancelled.');
  }
}
