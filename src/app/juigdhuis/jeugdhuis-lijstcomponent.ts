import { JeugdhuisService } from "./jeugdhuis-service";

export class JeugdhuisLijstcomponent {
    lijst: IJeugdhuis[];

    constructor(private service: JeugdhuisService) {
        this.service.Lijst.subscribe(d => this.lijst = d);
    }
}

export interface IJeugdhuis {
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