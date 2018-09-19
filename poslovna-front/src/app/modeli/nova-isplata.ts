import { Valuta } from "./valuta";
import { RacunLica } from "./racunLica";

export class NovaIsplata{

    constructor(
        public duznik: string,
        public svrha_placanja: string,
        public poverilac_primalac: string,
        public valuta: Valuta,
        public racun_duznika: RacunLica,
        public model_odobrenja: number,
        public poziv_na_brZ: string,
        public datum_prijema: Date,
        public iznos: number


    ){}
}