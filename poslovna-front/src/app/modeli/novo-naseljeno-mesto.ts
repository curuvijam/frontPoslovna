import { Drzava } from "./drzava";

export class NovoNaseljenoMesto{
    constructor(
        public sifra_mesta: number,
        public naziv: string,
        public ptt_oznaka: string,
        public drzava: Drzava
    
    ){}
}