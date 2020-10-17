import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {


  }
  pgetAll():Observable<Post[]> {
    return this.httpClient.get<Post[]>('http://jsonplaceholder.typicode.com/posts')
  }

  pgetAllUser(id:number):Observable<Post[]> {
    return this.httpClient.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }


}
