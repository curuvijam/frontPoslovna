import { Drzava } from "./drzava";

export class NovaValuta{
    constructor(
        public id_valute: number,
        public sifra: string,
        public naziv: string,
        public domicilna: boolean,
        public drzava: Drzava
        
    ){}
}