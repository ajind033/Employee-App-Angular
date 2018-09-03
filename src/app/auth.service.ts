import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{

  canActivate(){
  if(localStorage.getItem('key')!="qwerty741ws=="){
    this.router.navigate(['/']);
    return false;
  }
     
    return true;
  }
  constructor( private router: Router) { }
}