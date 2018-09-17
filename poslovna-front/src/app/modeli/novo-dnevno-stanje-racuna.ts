import { RacunLica } from "./racunLica";

export class NovoDnevnoStanjeRacuna{
    constructor(
        public datum_prometa: Date,
        public prethodno_stanje: number,
        public promet_korist: number,
        public promet_teren: number,
        public novo_stanje: number,
        public racuni_lica: RacunLica
        
    ){}
}