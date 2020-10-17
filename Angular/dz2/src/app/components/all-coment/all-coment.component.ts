import { Component, OnInit } from '@angular/core';
import {Coment} from "../../models/coment";
import {ComentService} from "../../servises/coment.service";

@Component({
  selector: 'app-all-coment',
  templateUrl: './all-coment.component.html',
  styleUrls: ['./all-coment.component.css']
})
export class AllComentComponent implements OnInit {


coment:Coment[];

  constructor(private comentService: ComentService) {

    this.comentService.cgetAll().subscribe(value => this.coment = value)
  }

  ngOnInit(): void {
  }

}
