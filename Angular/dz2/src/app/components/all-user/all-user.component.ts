import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";
import {UserService} from "../../servises/user.service";

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent  {


users:User[];

  constructor(private userService: UserService) {

    this.userService.getAll().subscribe(value => this.users = value)

  }



}
