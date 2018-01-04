import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
    export class NieuwsService {
        constructor(private http: HttpClient) {}

        getVeloStations(): Observable<INieuws>
        {
            return this.http.get<INieuws>("")
        }
   }
   export interface INieuws {
       status: string;
       copyright: string;
       num_results: number;
       results: string[]

   }

   export interface IVelo {
       paging: IPaging,
       data: IData[],
   }
   
