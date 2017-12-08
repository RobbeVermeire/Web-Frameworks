import { Component } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',//Kijkt vanaf zijn eigen folder, niet de root folder.
  styleUrls: ['./weather.component.scss'] //Kijkt vanaf zijn eigen folder, niet de root folder.
})



export class WeatherComponent {
  data: IWeather = {
    location: "Antwerpen",
    description: "Zonnig",
    temperature: 23,
    sunrise: new Date(2017, 1, 1, 8, 10),
    sunset: new Date(2017, 1, 1, 21, 15),
  }
}

interface IWeather {
  location: string;
  description: string;
  temperature: number;
  sunrise: Date;
  sunset: Date;
}






