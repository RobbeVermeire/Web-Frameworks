import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent implements OnInit {
  lengte: number;
  gewicht: number;
  WeightChoice: string;
  ButtonEnabled: boolean;
  TryAgain: boolean;
  bmi: number;


  constructor() {
   }

  ngOnInit() {
    this.ButtonEnabled = true;
  }

  CalculateBmi(): void {
    if (Number(this.lengte) && Number(this.gewicht) && this.WeightChoice === 'Kilogram' ) {
      this.TryAgain = false;
      this.bmi =  this.gewicht / ((this.lengte / 100) * (this.lengte / 100));
    } else if (Number(this.lengte) && Number(this.gewicht) && this.WeightChoice === 'Pond' ) {
      this.TryAgain = false;
      this.bmi =  703 // Conversion factor of 703 (kg/m2)/(lb/in2)
       * (this.gewicht / ((this.lengte) * (this.lengte)));
    } else {
      this.TryAgain = true;
    }
  }

  ChangeWeightChoice(keuze: string) {
    this.WeightChoice = keuze;
  }




}
