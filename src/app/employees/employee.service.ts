import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EmployeeService {
    private  listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Mark',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'mark@pragimtech.com',
            dateOfBirth: new Date('10/25/1988'),
            department: 1,
            isActive: true,
            photoPath: 'assets/images/mark.png'
        },
        {
            id: 2,
            name: 'Mary',
            gender: 'Female',
            contactPreference: 'Phone',
            phoneNumber: 2345978640,
            dateOfBirth: new Date('11/20/1979'),
            department: 2,
            isActive: true,
            photoPath: 'assets/images/mary.png'
        },
        {
            id: 3,
            name: 'John',
            gender: 'Male',
            contactPreference: 'Phone',
            phoneNumber: 5432978640,
            dateOfBirth: new Date('3/25/1976'),
            department: 3,
            isActive: false,
            photoPath: 'assets/images/john.png'
        },
    ];

    // get data from array
    // getEmployees(): Employee[] {
    //     return this.listEmployees;
    // }

    constructor(private httpClient: HttpClient) {
    }
    // get data observable
    getEmployees(): Observable<Employee[]> {
        // return Observable.of(this.listEmployees);
        return this.httpClient.get<Employee[]>('http://localhost:3000/employees');
    }

    save(newemployee: Employee) {
        this.listEmployees.push(newemployee);
    }
}
