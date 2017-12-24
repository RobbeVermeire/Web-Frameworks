import { Component, OnInit } from '@angular/core';
import { JeugdhuisService,IJeugdhuis, IDatum } from './jeugdhuis-service';


@Component({
  selector: 'app-juigdhuis',
  templateUrl: './juigdhuis.component.html',
  styleUrls: ['./juigdhuis.component.scss']
})
export class JuigdhuisComponent implements OnInit  {
 
 data: IDatum[]
 constructor(private service : JeugdhuisService){ }

 ngOnInit()
 {
   this.service.getJeugdhuizen()
   .subscribe(d => this.data = d.data);
 }
}
