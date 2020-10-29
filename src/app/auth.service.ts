import { LoginPayload } from './auth/login-payload';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from './auth/Register-Payload';
//import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  

  private baseurl ="http://localhost:8000/"; 


  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { }
  
  //login api call
  
  login(loginPayload:LoginPayload):Observable<boolean> {
    let headers :HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.post(this.baseurl +'api/login',loginPayload, {headers:headers}).pipe(map(data =>{
      this.localStorageService.store('loginData',data);
      return true;
  
    }));
  }


  //register api call
  register(registerPayload:RegisterPayload): Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/JSON'});
    return this.httpClient.post(this.baseurl + 'api/signup',registerPayload, {headers:headers});
  }



  //isAuthenticated() method to check whether user has logged in or not
  isAuthenticated():boolean{
    return this.localStorageService.retrieve('loginData') !=null;
  }


  //logout - to clear localstroage data.
  logout() {
    this.localStorageService.clear('loginData');
  }


  //Update user profile
  updateProfile(updatePayload,id:Number):Observable<any> {
    let headers : HttpHeaders = new HttpHeaders({'Content-Type':'application/json' });
    return this.httpClient.patch(this.baseurl + 'api/patchUser' + id ,{headers:headers});
    
  }

  //delete user

  deleteUser(id:Number)
  {
    let headers: HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.baseurl + 'api/deleteUser/' + id ,{ headers : headers});
  }

}
