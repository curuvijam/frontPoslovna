import { Valuta } from "./valuta";



export class NovRacunLica
{
    constructor(
        public br_racuna: string,
        public datum_otvaranja: Date,
        public vazeci: boolean,
        public valuta: Valuta
      
    ){}
}