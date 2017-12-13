import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http"
import { Observable } from "rxjs/Observable";
import * as JeugdhuisLijstcomponent from './jeugdhuis-lijstcomponent';
import { IJeugdhuis } from "./jeugdhuis-lijstcomponent";

@Injectable()
export class JeugdhuisService {
    constructor(private _http: HttpClient) {}
       
        get Lijst() : Observable<IJeugdhuis[]>{
            return this._http.get<IJeugdhuis[]>("./assets/data.json");
    }
}