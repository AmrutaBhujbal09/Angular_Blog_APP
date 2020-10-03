import { LoginPayload } from './auth/login-payload';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  

  private baseurl ="http://localhost:8000/"; 
 
  constructor(private httpclient:HttpClient,private localStorageService:LocalStorageService) { }

  login(loginPayload:LoginPayload):Observable<boolean> {
    let headers :HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpclient.post(this.baseurl +'api/amu/login',loginPayload, {headers:headers}).pipe(map(data =>{
      this.localStorageService.store('loginData',data);
      return true;
  
    }));
  }
}
