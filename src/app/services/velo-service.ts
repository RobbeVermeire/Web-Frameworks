import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import { IPaging } from './jeugdhuis-service';

@Injectable()
    export class VeloService{
        constructor(private http: HttpClient) {}

        getVeloStations(): Observable<IVelo>
        {
            return this.http.get<IVelo>("http://datasets.antwerpen.be/v4/gis/velostation.json")
        }
   }
   export interface IData{
    id:number;          //1
    objectid:number,    // 77187
    point_lat:string,	//"51.22808499687600"
    point_lng:string,	//"4.40899727964430"
    shape: any;    	//null
    objecttype: string,	//"VELOSTATION"
    type_velo:string 	//"ENKELZIJDIG"
    ligging: any,	    //null
    straatnaam:string	//"GODEFRIDUSKAAI"
    huisnummer:string,	//" "
    aanvulling:string,	//"thv Q-park"
    district:string,    //"ANTWERPEN"
    postcode:string,	//"2000"
    objectcode:string,	//"VE_0000129"
    gebruik:string	    //"IN_GEBRUIK"
   }

   export interface IVelo{
       paging: IPaging,
       data: IData[],
   }
