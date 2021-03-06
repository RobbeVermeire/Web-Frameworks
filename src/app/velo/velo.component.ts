import { Component, OnInit } from '@angular/core';
import { VeloService, IData, IVelo} from '../services/velo-service';
import { Data } from '@angular/router/src/config';



@Component({
  selector: 'app-velo',
  templateUrl: './velo.component.html',
  styleUrls: ['./velo.component.scss']
})
export class VeloComponent implements OnInit {
  lat = 51.22808499687600;
  lng = 4.40899727964430;
  var_lat= 51.22808499687600;
  var_lng= 4.40899727964430;
  veloData: IData[];
  veloObject: IData;
  constructor(private service: VeloService) { }

  SelectItem(id: Number ): void {

    this.veloObject = this.veloData[id.toString()];
    console.log('id: ' + id);
    console.log('obj: ' + this.veloObject);
    this.var_lat = Number(this.veloObject.point_lat);
    this.var_lng = Number(this.veloObject.point_lng);
    this.lat = this.var_lat;
    this.lng = this.var_lng;
  }

  ngOnInit() {
    this.service.getVeloStations()
    .subscribe(d => this.veloData = d.data);
  }
}
