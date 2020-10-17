import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "./servises/user.service";
import {User} from "./models/user";
import {Post} from "./models/post";
import {Coment} from "./models/coment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dz2';
  userOuter: User[];
  postOuter: Post[];
  comentOuter: Coment[];

  constructor() {


  }
}

