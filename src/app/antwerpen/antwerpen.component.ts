import { Component, OnInit } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-antwerpen',
  templateUrl: './antwerpen.component.html',
  styleUrls: ['./antwerpen.component.scss']
})
export class AntwerpenComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

}

@Injectable()
export class AppServices{

    constructor(private http: Http) {
         var obj;
         this.getJSON().subscribe(data => obj=data, error => console.log(error));
    }

    public getJSON(): Observable<any> {
         return this.http.get("./assets/velostation.json")
                         .map((res:any) => res.json())
                        

     }
}
