import { Component, OnInit } from '@angular/core';
import * as Afstand from './afstand-service';
import { Data } from '@angular/router/src/config';

import { element } from 'protractor';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-afstand',
  templateUrl: './afstand.component.html',
  styleUrls: ['./afstand.component.scss']
})
export class AfstandComponent implements OnInit {

  Lijst:Afstand.IRow[];
  Distance: String;
  constructor(private service: Afstand.AfstandService) { }

  ngOnInit() 
  {
    this.service.getAfstand()
    .subscribe(d => this.Lijst = d.rows);
   //this.Distance = this.Lijst.destination_addresses;
   for(var i =0; i < this.Lijst.length; i++ ){
      for(var j=0; j < this.Lijst[i].elements.length;j++ ){
        this.Distance = this.Lijst[j].elements[j].distance.text;
      }
   }
  console.log(this.Distance);
  
  }

}