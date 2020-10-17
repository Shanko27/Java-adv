import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {


  }
  getAll():Observable<User[]> {
    return this.httpClient.get<User[]>('http://jsonplaceholder.typicode.com/users')
  }

}
