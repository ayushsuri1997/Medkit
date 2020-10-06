import { Injectable } from '@angular/core';
import {User} from './user.model';
import { HttpClient, } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User={
    firstName:'',
    lastName:'',
    email:'',
    password:''
  };

  constructor(private http: HttpClient) { }
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/register',user);
    }
  }

