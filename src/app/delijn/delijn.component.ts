import { Component } from '@angular/core';

@Component({
  selector: 'app-delijn',
  templateUrl: './delijn.component.html',
})

export class DeLijnComponent{

    vertrekken : ILijnen[] =
    [
    {
    bestemming:"Antwerpen",
    lijnNummer: 322,
    vertrekTijd: new Date()
    },
    {
    bestemming:"Brussel",
    lijnNummer: 546,
    vertrekTijd: new Date()
    },
    {
    bestemming:"Charleroi",
    lijnNummer: 941,
    vertrekTijd: new Date()
    }
    ]
    

    
    
}

interface ILijnen{
    bestemming: string;
    lijnNummer: number;
    vertrekTijd: Date;
    }
