import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../models/user";

import {PostService} from "../../servises/post.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  us:User


  constructor(private postService: PostService) { }

xxx(user: User): void{
  this.postService.pgetAllUser(user.id).subscribe(value => console.log(value))


}
}
