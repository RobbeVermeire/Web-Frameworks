import { Component, OnInit } from '@angular/core';
import { JeugdhuisService,IJeugdhuis, IDatum } from '../services/jeugdhuis-service';
import { Data } from '@angular/router/src/config';


@Component({
  selector: 'app-juigdhuis',
  templateUrl: './juigdhuis.component.html',
  styleUrls: ['./juigdhuis.component.scss']
})
export class JuigdhuisComponent implements OnInit  {
  lat = 51.260197;
  lng = 4.402771;
  var_lat: number;
  var_lng: number;
  data: IDatum[];
 constructor(private service: JeugdhuisService) { }

 SelectItem(item: Data): void {
    this.var_lat = item.lat;
    this.var_lng = item.long;
 }
 ngOnInit() {
   this.service.getJeugdhuizen()
   .subscribe(d => this.data = d.data);
 }
}
