import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  postRequest(path, dataJson): Observable<any> {

    return this.http.post<any>(url + path, dataJson, httpOptions);

  }

  getRequest(path): Observable<any> {

    return this.http.get(url + path,httpOptions);

  }

  constructor(private http: HttpClient) { }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/JSON',
    'responseType': 'text'
  })
};

const url: string = 'http://localhost:8080/Employee/';