import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import {ShowAllEmployeeComponent} from './show-all-employee/show-all-employee.component';

import{ AuthService } from './auth.service';
import {ObservableService} from './observable.service';

import {RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes : Routes = [
  {
    path : "",
    component : ShowAllEmployeeComponent
  },{
  path : "newEmployee",
  component : CreateEmployeeComponent,
  canActivate: [AuthService]
  },{
    path : "**",
    component : PageNotFoundComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ShowAllEmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    ObservableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
