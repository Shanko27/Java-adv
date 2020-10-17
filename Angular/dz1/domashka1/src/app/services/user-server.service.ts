import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserServerService {

  constructor(private http:HttpClient) { }

  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>('http://jsonplaceholder.typicode.com/users')
  }
}
