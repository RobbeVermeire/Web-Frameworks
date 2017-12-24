
import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";

@Injectable()
export class JeugdhuisService {
    constructor(private _http: HttpClient) {}
       
        getJeugdhuizen() : Observable<IJeugdhuis>
        {
            return this._http.get<IJeugdhuis>("http://datasets.antwerpen.be/v4/gis/jeugdhuisoverzicht.json")
           // .do(data => console.log(JSON.stringify(data)));
            //.map(root => {return root});             
        }
}
        export interface IPaging {
            records: number;
            pages: number;
            pageCurrent: number;
            pageNext?: any;
            pagePrev?: any;
            pageSize: number;
        }
    
        export interface IDatum {
            objectid: number;
            point_lat: string;
            point_lng: string;
            id?: any;
            thema: string;
            type: string;
            subtype: string;
            naam: string;
            straat: string;
            huisnummer: string;
            postcode: string;
            district: string;
            lgst_niv?: any;
            hgst_niv?: any;
            grondopp?: any;
            gemetenopp?: any;
            gebo?: any;
            pero?: any;
            begindatum: string;
            capa_zit?: any;
            capa_staan?: any;
            groep_0tot5jaar?: any;
            groep_6tot11jaar?: any;
            groep_12tot17jaar?: any;
            groep_18plus?: any;
            shape?: any;
        }
    
        export interface IJeugdhuis {
            paging: IPaging;
            data: IDatum[];
        }



    