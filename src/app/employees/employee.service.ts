import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';


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
        return this.httpClient.get<Employee[]>('http://localhost:3000/employees')
            .catch(this.handleError);
    }

    getEmployee(id: number): Employee {
        return this.listEmployees.find(e => e.id === id);
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        // return an observable with a meaningful error message to the end user
        return new ErrorObservable('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    save(newemployee: Employee) {
        this.listEmployees.push(newemployee);
    }
}
