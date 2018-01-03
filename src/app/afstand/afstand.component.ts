import { Component, OnInit } from '@angular/core';
import * as Afstand from '../services/afstand-service';
import { Data } from '@angular/router/src/config';
import { JeugdhuisService} from '../services/jeugdhuis-service';
import { element } from 'protractor';
import { Console } from '@angular/core/src/console';

@Component({
  selector: 'app-afstand',
  templateUrl: './afstand.component.html',
  styleUrls: ['./afstand.component.scss']
})
export class AfstandComponent implements OnInit {

  Lijst:Afstand.IRow[];
  lat1 : number;
  lng1: number;
  data : Data;
  afstanden : number[];
  constructor(private service: Afstand.AfstandService, private service2 : JeugdhuisService) { }

  ngOnInit() 
  {
    this.service2.getJeugdhuizen()
    .subscribe(d => this.data = d.data); 
  }

  SetLocations(val1 : number,val2:number):void{
    this.lat1 = val1;
    this.lng1 = val2;
    
    for(var i= 0; i < this.data.length;i++ ){
      this.service.getAfstand(this.lat1,this.lng1,this.data[i].lat,this.data[i].lng)
      .subscribe(d => this.afstanden[i] = Number(d.status)); // probleem met json data: is ons niet gelukt om afstand weertegeven, zelfs status code lukte niet.
      this.afstanden[i] *= 1.609344;                         // terwijl we wel een 200 code terug kregen en als we het api request in de browser doen kregen we juiste json code terug.
    }
                                                            // de afstand zou in mile staan.
  }

}