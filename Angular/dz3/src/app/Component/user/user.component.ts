import { Component, Input, OnInit } from '@angular/core';
import {PostService} from "../../Services/post.service";
import {Post} from "../../model/post";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

userPost: Post[];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

this.activatedRoute.params
  .subscribe(value => {
    this.postService.pgetUser(value.id).subscribe(data => this.userPost = data)
  })
  }

  ngOnInit(): void {
  }

}
