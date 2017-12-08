import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';




@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  

  hey:boolean=true;
  inputText:string="hey";
  word:string;
  words:string[]=["copper",
  "explain",
  "ill-fated",
  "truck",
  "neat",
  "unite",
  "branch",
  "educated",
  "tenuous",
  "hum",
  "decisive",
  "notice",]

  NewWord(){ 
    this.word=this.words[ _.random(0,this.words.length)];

  }
  CheckWord(){
    if(this.inputText==this.word)
    this.hey=true;
    else
    this.hey=false;
  }
  constructor() {
   }

  ngOnInit() {
    this.inputText="hey"
  }

}
