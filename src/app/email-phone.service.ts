import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailPhoneService {
public Base_url='https://emailvalidation.abstractapi.com/v1/';
public Api_key='a4bf453e6982437baff234a9d99e07cc';

  constructor(public http:HttpClient) { }
  getEmailValidation(email:string):Observable<any>{

    return this.http.get<any>(`${this.Base_url}?api_key=${this.Api_key}&email=${email}`); 
  }

}
