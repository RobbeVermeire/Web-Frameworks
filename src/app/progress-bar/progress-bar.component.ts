import { Component, OnInit } from '@angular/core';

declare var angular: any;


@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
    var bar = document.getElementById  
    var app = angular.module('myApp', []);
    app.controller('myCtrl', function($scope, $interval) {
      $scope.theTime = new Date().toLocaleTimeString();
      $interval(function () {
         
      }, 1000);
    });
  
  }}
