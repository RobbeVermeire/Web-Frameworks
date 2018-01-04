import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { delay } from 'q';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  hey= true;
  inputText = 'hey';
  word: string;

  words: string[]= [
  'copper',
  'explain',
  'ill-fated',
  'truck',
  'neat',
  'unite',
  'branch',
  'educated',
  'tenuous',
  'hum',
  'decisive',
  'notice'];

  NewWord() {

    while (true) {
      this.word = this.words[ _.random(0, this.words.length)];
      console.log('Nieuw woord:' + this.word);
      delay(3000);
    }
  }

  CheckWord() {
    if (this.inputText === this.word) {
      this.hey = true;
    }else {
      this.hey = false;
    }

  }
  constructor() {
   }

  ngOnInit() {
  }

}
