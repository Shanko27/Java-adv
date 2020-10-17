import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }
  allUser() : Observable<User[]>{
    return this.http.get<User[]>(`http://jsonplaceholder.typicode.com/users`)
  }
}
