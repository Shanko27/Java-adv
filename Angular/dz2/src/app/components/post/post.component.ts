import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {ComentService} from "../../servises/coment.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
pos:Post
  constructor(private comentService:ComentService) { }

  zzz(post:Post): void {
    this.comentService.cgetAllpost(post.id).subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }

}
