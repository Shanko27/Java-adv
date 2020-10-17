import { Component } from '@angular/core';
import {UserServerService} from "./services/user-server.service";
import {UserModel} from "./models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: UserModel[] = [];
 constructor(private userService:UserServerService) {
 userService.getUsers().subscribe(jsonUsers => {
  this.user = jsonUsers;
   })
 }
 say(){
   console.log(3333);
 }
}
