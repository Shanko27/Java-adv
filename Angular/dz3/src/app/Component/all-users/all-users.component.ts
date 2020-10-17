import { Component, OnInit } from '@angular/core';
import {UserService} from "../../Services/user.service";
import {User} from "../../model/user";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[];

  constructor(private userSevice:UserService) {
    this.userSevice.allUser().subscribe(value => this.users = value)


  }
  ngOnInit(): void {
  }

}
