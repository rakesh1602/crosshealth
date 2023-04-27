import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Gender,Prefix } from 'src/datamodel/add-patient';

const BASE_URL = 'http://localhost:8080';
const ADD_PATIENT_API_URL = BASE_URL + "/patients";
const GET_GENDER_API_URL = BASE_URL + "/genders";
const GET_PREFIX_API_URL = BASE_URL + "/prefixs";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  addPatient(
    patient:
    {
      person: {
        prefix: string;
        firstName: string;
        lastName: string;
        phoneNumber: string;
        dob: Date;
        gender: String;
        account: {
          emailId: string;
        };
      } }): Observable<object>{
    return this.http.post<object>(ADD_PATIENT_API_URL, patient)
  }
  

  getGender(): Observable<{ gender: Gender }[]>{
    return this.http.get<{gender:Gender}[]>(GET_GENDER_API_URL)
  }

  getPrefix(): Observable<{ prefix: Prefix }[]>{
    return this.http.get<{prefix:Prefix}[]>(GET_PREFIX_API_URL)
  }
    
  
}
