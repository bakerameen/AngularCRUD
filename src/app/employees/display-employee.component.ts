import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../model/employee.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee[];
  private selectedID: number;
  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
   this.selectedID = +this._route.snapshot.paramMap.get('id');
  }

}
