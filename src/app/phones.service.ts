import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
public base_url='https://phonevalidation.abstractapi.com/v1/';
public phone_key='001010d3339f490c8129e587f3637e6d';
  constructor(public https:HttpClient) { }
  
  
  getPhoneValid(phone:number):Observable<any>{
    return this.https.get<any>(`${this.base_url}?api_key=${this.phone_key}&phone=${phone}`);

  }

}
