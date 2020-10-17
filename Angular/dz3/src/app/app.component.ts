import { Component } from '@angular/core';
import {User} from "../../../dz2/src/app/models/user";
import {Post} from "./model/post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dz3';
  userOuter: User[];
  postOuter: Post[];
}
