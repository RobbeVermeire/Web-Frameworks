import { Component, OnInit } from '@angular/core';
import * as Mathjs from "Mathjs";

@Component({
  selector: 'app-cirkel',
  templateUrl: './cirkel.component.html',
  styleUrls: ['./cirkel.component.scss']
})
export class CirkelComponent implements OnInit {

  InputeValue : number;
  Select : boolean;
  constructor() { }

  ngOnInit() 
  {

  }

 Calculate(): void {
 
  if(this.Select)
  {
    this.InputeValue =  this.CalculateSurface(this.InputeValue/2);
  }
  else {
    this.InputeValue =  this.CalculateSurface(this.InputeValue);
  }

 }
 SelectDia(): void{
   this.Select = true;
 }
 SelectRadi() : void {
  this.Select = false;
 }
  CalculateSurface(radian : number): number{
   return radian*radian*Math.PI;
 }
}
