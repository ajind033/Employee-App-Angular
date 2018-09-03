import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'


import {ObservableService} from '../observable.service';
@Component({
  selector: 'app-show-all-employee',
  templateUrl: './show-all-employee.component.html',
  styleUrls: ['./show-all-employee.component.css']
})
export class ShowAllEmployeeComponent implements OnInit {

  constructor(private route: Router,private observable:ObservableService,) { }

  employeeList:any;
  employee:string="";
  employeeSearch:any;
  reg:any;
  ngOnInit() {
    localStorage.clear();
    this.observable.getRequest("getAllEmployee").subscribe(res => {
      this.employeeList=res;  
      
      this.employeeSearch=JSON.parse(JSON.stringify(this.employeeList));    
    },
      err => {
        console.log(err)
      });
      
  }
  addEmloyee(){
    localStorage.setItem("key","qwerty741ws==");
    this.route.navigate(["/newEmployee"]);
  }
  findEmployee(){
    this.employee=this.employee.trim();
    this.reg = new RegExp(this.employee, "i");
    this.employeeSearch.length = 0;
    for (let employee of this.employeeList) {
      if (this.reg.test(employee.fname)) {
        this.employeeSearch.push(employee);
      }
    }
  }
}
