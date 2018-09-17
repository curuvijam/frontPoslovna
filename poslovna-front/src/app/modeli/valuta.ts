import { Drzava } from "./drzava";


export class Valuta{
    constructor(
        public id: number,
        public id_valute: number,
        public sifra: string,
        public naziv: string,
        public domicilna: boolean,
        public drzava: Drzava
      
        
    ){}
}