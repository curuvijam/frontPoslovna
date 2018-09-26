import { Clearing } from "./clearing";


export class Banka{
    constructor(
      public id: number,
      public sifra_banke: String,
      public PIB: String,
      public naziv: String,
      public adresa: String,
      public email: String,
      public web: String,
      public telefon: String,
      public fax: String,
      public banka: boolean,
      public swif_kod: String,
      public obracunski_racun: String,
      public aktivanClearing: Clearing
      
    ){}
}