import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../model/department.model';
import { Employee } from '../model/employee.model';
import {EmployeeService} from './employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
// selected
gender = 'male';
previewPhoto = false;
PhotoPath = '';
employee: Employee = {
  id: null,
  name: null,
  gender: null,
  email: null,
  phoneNumber: null,
  contactPreference: null,
  dateOfBirth: null,
  department: -1,
  isActive: null,
  photoPath: null,
};

departments: Department[] = [
  { id: 1, name: 'Help Desck'},
  { id: 2, name: 'HR'},
  { id: 3, name: 'IT' },
  { id: 4, name: 'Paroyall' }
];



  constructor(private _employeeService: EmployeeService, private _route: Router) { }

  ngOnInit() {
  }


  // saveEmployee(employeeForm: NgForm): void {
  //    console.log(employeeForm.value);
  // }

  // saveEmployee(newEmployee: Employee): void {
  //   console.log(newEmployee);
  // }

  saveEmployee() {
    this._employeeService.save(this.employee);
    this._route.navigate(['list']);
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }


}
