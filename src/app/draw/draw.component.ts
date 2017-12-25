import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  imageUrl : String;
  constructor() { }

  ngOnInit() {
    this.imageUrl ="http://www.strandedsoft.com/contenidos/uploads/2014/03/ball2.gif";
  }

}
