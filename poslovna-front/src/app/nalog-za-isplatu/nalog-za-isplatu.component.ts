import { AnalitikaService } from './../services/analitika.service';
import { AnalitikaIzvoda } from './../modeli/analitika-izvoda';
import { Component, OnInit, Input } from '@angular/core';
import { NovaIsplata } from '../modeli/nova-isplata';
import { Valuta } from '../modeli/valuta';
import { RacunLica } from '../modeli/racunLica';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Location } from '@angular/common';
import { ValuteService } from '../services/valute.service';
import { RacunLicaService } from '../services/racun-lica.service';

@Component({
  selector: 'app-nalog-za-isplatu',
  templateUrl: './nalog-za-isplatu.component.html',
  styleUrls: ['./nalog-za-isplatu.component.css']
})
export class NalogZaIsplatuComponent implements OnInit {
  valutaShow: Valuta;
  racuniLicaShow: RacunLica;
  analitikaIzvoda: AnalitikaIzvoda;
  file: any;
  datum1: Date = new Date('MM/dd/yyyy');
  model: any = {};
<<<<<<< HEAD
  date1 = new Date(this.model.datum_prijema);

  nalogZaIsplatu: AnalitikaIzvoda = new AnalitikaIzvoda(0,"","","",this.date1,this.date1,null,0,"","",0,"",false,0,0,"",null);
=======
  date1 = new Date(this.model.datum_otvaranja);
  nalogZaIsplatu: NovaIsplata = new NovaIsplata(
    '',
    '',
    '',
    null,
    null,
    0,
    '',
    this.date1,
    0
  );
>>>>>>> d47bb2955afc2b7bc53976d3ad4d866148be56dd
  valuta: Valuta;
  racun_duznika: RacunLica;
  valute: Valuta[];
  racuni: RacunLica[];
  br_racuna: string;

  constructor(
    private analitikaService: AnalitikaService,
    private location: Location,
    private valuteService: ValuteService,
    private racuniService: RacunLicaService
  ) {}

  onChange(event) {
    this.file = event.srcElement.files;
    console.log(this.file);
  }

  upload() {
    this.analitikaService.loadFromFile(this.file).subscribe();
  }

  noviNalogIsplataSubmit(forma: NgForm) {
    this.getRacun();
    this.nalogZaIsplatu.duznik = forma.value.duznik;
    this.nalogZaIsplatu.iznos = forma.value.iznos;
    this.nalogZaIsplatu.datum_prijema = forma.value.datum_prijema;
    this.nalogZaIsplatu.model_odobrenja = forma.value.model_odobrenja;
    this.nalogZaIsplatu.poverilac_primalac = forma.value.poverilac_primalac;
    this.nalogZaIsplatu.poziv_na_brZ = forma.value.poziv_na_brZ;
    this.nalogZaIsplatu.svrha_placanja = forma.value.svrha_placanja;
    this.nalogZaIsplatu.valuta = this.valuta;
<<<<<<< HEAD
    this.nalogZaIsplatu.racun_duznika = this.racun_duznika;
    console.log(this.nalogZaIsplatu);
=======
    console.log(this.racun_duznika);
    this.nalogZaIsplatu.racun_duznika = this.racun_duznika;
>>>>>>> d47bb2955afc2b7bc53976d3ad4d866148be56dd
    this.analitikaService.insertNalogZaIsplatu(this.nalogZaIsplatu).subscribe();
    forma.reset();
    this.location.back();
  }
  getRacuniLica(): void {
    this.racuniService.getRacuni().subscribe(racuni => (this.racuni = racuni));
  }
  getValute(): void {
    this.valuteService.getValute().subscribe(valute => (this.valute = valute));
  }

<<<<<<< HEAD
}
getRacuniLica(): void{
  this.racuniService.getRacuni().subscribe(racuni => this.racuni = racuni);
}
getValute(): void {
  this.valuteService.getValute().subscribe(valute => (this.valute = valute));
}


getRacun(){
  this.racuniService.getRacun(this.racunId).subscribe((racun) => this.racun_duznika = racun);
}

ngOnInit() {

  this.getValute();
  this.getRacuniLica();

}

=======
  getRacun() {
    this.racuniService
      .getRacun(this.br_racuna)
      .subscribe(
        racun => {
          this.racun_duznika = racun;
        }
      );
  }
>>>>>>> d47bb2955afc2b7bc53976d3ad4d866148be56dd

  ngOnInit() {
    this.getValute();
    this.getRacuniLica();
  }
}
