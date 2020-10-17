import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../servises/post.service";

@Component({
  selector: 'app-all-post',
  templateUrl: './all-post.component.html',
  styleUrls: ['./all-post.component.css']
})
export class AllPostComponent implements OnInit {

  post:Post[];

  constructor(private postServises: PostService) {
    this.postServises.pgetAll().subscribe(value => {
      return this.post = value;
    })
  }

  ngOnInit(): void {
  }

}
