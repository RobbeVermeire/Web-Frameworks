import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule,NO_ERRORS_SCHEMA} from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { HomeComponent} from './home/home.component';
import { DeLijnComponent } from './delijn/delijn.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AntwerpenComponent } from './antwerpen/antwerpen.component';
import { GameComponent } from './game/game.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { JuigdhuisComponent } from './juigdhuis/juigdhuis.component';
import { JeugdhuisService } from './juigdhuis/jeugdhuis-service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HomeComponent,
    DeLijnComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    AntwerpenComponent,
    GameComponent,
    JuigdhuisComponent,

  ],

  imports: [
    MDBBootstrapModule.forRoot(),    
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'weather', component: WeatherComponent},
      {path:'', redirectTo:'home',pathMatch:'full'},
      {path:'antwerpen', component:AntwerpenComponent},
      {path:'game', component:GameComponent},
      {path:'jeugdhuis', component:JuigdhuisComponent},
      {path:"**", component:PageNotFoundComponent}
    ],{useHash:true}),
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false
    })
  ],
  schemas: [ NO_ERRORS_SCHEMA ],  
  providers: [
    JeugdhuisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
