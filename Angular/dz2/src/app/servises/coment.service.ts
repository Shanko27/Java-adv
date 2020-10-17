import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coment} from "../models/coment";

@Injectable({
  providedIn: 'root'
})
export class ComentService {

  constructor(private httpClient: HttpClient) {


  }
  cgetAll():Observable<Coment[]> {
    return this.httpClient.get<Coment[]>('http://jsonplaceholder.typicode.com/comments')
  }
  cgetAllpost(id:number):Observable<Coment> {
    return this.httpClient.get<Coment>(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)

  }
}
