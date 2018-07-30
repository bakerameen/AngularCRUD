import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';
// Import EmployeeService
import { EmployeeService } from './employee.service';
import { Router, Route } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
employees: Employee[];

  constructor(private _employeeService: EmployeeService, private _route: Router) {}

  ngOnInit() {
    // before Observable
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe((empList) => {
        this.employees = empList;
    });

  }

  displayEmployee(employeeId: number) {
    this._route.navigate(['employees', employeeId]);
  }

}
