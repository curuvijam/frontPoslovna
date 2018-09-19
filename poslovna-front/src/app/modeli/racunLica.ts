import { KlijentPravno } from "../klijent/klijent-pravno";
import { KlijentFizicko } from "../klijent/klijent-fizicko";



export class RacunLica{
    constructor(
        public id: number,
        public br_racuna: string,
        public datum_otvaranja: Date,
        public vazeci: boolean,
        public fizickoLice: KlijentFizicko,
        public pravnoLice: KlijentPravno
        
        
    ){}
}