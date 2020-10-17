import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../../../../dz2/src/app/models/post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  pgetUser(id: number):Observable<Post[]> {
    return this.http.get<Post[]>(`http://jsonplaceholder.typicode.com/posts?userId=${id}`)
  }

}
