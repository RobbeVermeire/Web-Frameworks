import { Component, OnInit } from '@angular/core';
import * as Math from 'Mathjs';
@Component({
  selector: 'app-driehoek',
  templateUrl: './driehoek.component.html',
  styleUrls: ['./driehoek.component.scss']
})
export class DriehoekComponent implements OnInit {
 Zijde1 : number;
 Zijde2 : number;
 Zijde3 : number;
  constructor() { }

  ngOnInit() {
  }
  Calculate(): void {
    this.Zijde3 = Math.sqrt(Math.pow(this.Zijde1,2) + Math.pow(this.Zijde2,2));
  }
}
