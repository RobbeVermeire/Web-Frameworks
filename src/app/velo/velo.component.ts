import { Component, OnInit } from '@angular/core';
import { VeloService, IData, IVelo} from '../services/velo-service';
import { Data } from '@angular/router/src/config';



@Component({
  selector: 'app-velo',
  templateUrl: './velo.component.html',
  styleUrls: ['./velo.component.scss']
})
export class VeloComponent implements OnInit {
  lat = 51.260197;
  lng = 4.402771;
  var_lat: number;
  var_lng: number;

veloData: IData[];
  constructor(private service: VeloService) { }

  ngOnInit() {
    this.service.getVeloStations()
    .subscribe(d => this.veloData = d.data);
  }

  SelectItem(station: Data): void {
    // console.log(station.point_lat);
    // console.log(station.point_lng);
    this.var_lat = station.point_lat;
    this.var_lng = station.point_lng;
  }

}
