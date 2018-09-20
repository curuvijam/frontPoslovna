import { Valuta } from "./valuta";
import { RacunLica } from "./racunLica";

export class AnalitikaIzvoda {
  constructor(
    public br_stavke: number,
    public duznik: string,
    public svrha_placanja: string,
    public poverilac_primalac: string,
    public datum_prijema: Date,
    public datum_valute: Date,
    public racun_duznika: RacunLica,
    public model_zaduzenja: number,
    public poziv_na_brZ: string,
    public racun_poverioca: string,
    public model_odobrenja: number,
    public poziv_na_brO: string,
    public hitno: boolean,
    public iznos: number,
    public tip_greske: number,
    public status: string,
    public valuta: Valuta,
    public id?: number
  ) {}
}
