import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AfstandService  {
    constructor(private _http: HttpClient) {}
       


        getAfstand(lat1: number,lng1 : number,lat2 : number, lng2: number) : Observable<IAfstand>
        {
            return this._http.get<IAfstand>("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins="+lat1+","+lng1+"C&destinations="+lat2+","+lng2+",NY&key=AIzaSyBfSOt9GMm1ogFXdh3N2wjZAqePo1l7uCo");
            // geeft 200 status code terug
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