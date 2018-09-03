import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import {ObservableService} from '../observable.service';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private route: Router,private observable:ObservableService ) { }

  ngOnInit() { }
  genders = ['Male', 'Female', 'Others'];
  detailsForm = new FormGroup({
    empId: new FormControl('', [Validators.minLength(4), Validators.pattern('[0-9]*'), Validators.required]),
    fname: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), , Validators.required]),
    lname: new FormControl('', [Validators.pattern('[a-zA-Z ]*'), Validators.required]),
    contact: new FormControl('', [Validators.minLength(10), Validators.pattern('[0-9 ]*'), Validators.required]),
    gender: new FormControl('Male', [Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required, Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+={};:"|,.<>]).{0,16})')])
  });

  get getDetail() {
    return this.detailsForm.controls;
  }
 
  togglePassFlag: boolean = false;
  togglePass(id) {
    if (this.togglePassFlag) {
      document.getElementById(id).setAttribute('type', 'password');
    }
    else {
      document.getElementById(id).setAttribute('type', 'text');
    }
    this.togglePassFlag = !this.togglePassFlag;
  }
  onSubmit() {
    localStorage.clear();
    this.observable.postRequest("saveEmp",this.detailsForm.value).subscribe(res => {
      console.log(res);
      this.route.navigate(["/"]);
    },
      err => {
        alert(err.error.text);
        console.log(err);
      });
  }
}
