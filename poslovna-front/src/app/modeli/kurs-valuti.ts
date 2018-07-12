import { KursnaLista } from "./kursna-lista";
import { Valuta } from "./valuta";

export class KursValuti{
    constructor(
       public redni_br: number,
       public kupovni: number,
       public srednji: number,
       public prodajni: number,
       public kursnaLista: KursnaLista,
       public valute: Valuta
        
    ){}
}