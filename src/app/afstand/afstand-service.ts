import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AfstandService  {
    constructor(private _http: HttpClient) {}
       
        getAfstand() : Observable<IAfstand>
        {
            return this._http.get<IAfstand>("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=AIzaSyBfSOt9GMm1ogFXdh3N2wjZAqePo1l7uCo")
            //.do(data => console.log(JSON.stringify(data)));
            //.map(root => { root.data.forEach(data => data.lat = Number(data.point_lat));return root})
           
        }
}

    
        export interface IDistance {
            text: string;
            value: number;
        }
    
        export interface IDuration {
            text: string;
            value: number;
        }
    
        export interface IElement {
            distance: IDistance;
            duration: IDuration;
            status: string;
        }
    
        export interface IRow {
            elements: IElement[];
        }
    
        export interface IAfstand {
            destination_addresses: string[];
            origin_addresses: string[];
            rows: IRow[];
            status: string;
        }