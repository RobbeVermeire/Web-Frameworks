import { Component, OnInit } from '@angular/core';
import { JeugdhuisService } from './jeugdhuis-service';


@Component({
  selector: 'app-juigdhuis',
  templateUrl: './juigdhuis.component.html',
  styleUrls: ['./juigdhuis.component.scss']
})
export class JuigdhuisComponent  {
 constructor(private service : JeugdhuisService){

 }

}
