import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { delay } from 'q';
import { setInterval } from 'timers';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  words = [
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
  hey= true;
  inputText = 'hey';
  word: string;

  ngOnInit() {
    setInterval(this.NewWord , 1000);
  }

  NewWord() {
    this.word = this.words[ _.random(0, this.words.length)];
    console.log('Nieuw woord:' + this.word);
          }

  ButtonClick() {
    this.NewWord();
    setTimeout(this.ButtonClick , 2000);
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


}
