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
  selectedFiles: FileList;
  file: File;
  datum1: Date = new Date('MM/dd/yyyy');
  model: any = {};
  date1 = new Date(this.model.datum_prijema);

  nalogZaIsplatu: AnalitikaIzvoda = new AnalitikaIzvoda(0,"","","",this.date1,this.date1,null,0,"","",0,"",false,0,0,"",null);
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
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.file = this.selectedFiles.item(0);
    console.log('upload() ');
    console.log(this.file);
    this.analitikaService.loadFromFile(this.file).subscribe();
  }

  noviNalogIsplataSubmit(forma: NgForm) {
    
    this.nalogZaIsplatu.duznik = forma.value.duznik;
    this.nalogZaIsplatu.iznos = forma.value.iznos;
    this.nalogZaIsplatu.datum_prijema = forma.value.datum_prijema;
    this.nalogZaIsplatu.model_odobrenja = forma.value.model_odobrenja;
    this.nalogZaIsplatu.poverilac_primalac = forma.value.poverilac_primalac;
    this.nalogZaIsplatu.poziv_na_brZ = forma.value.poziv_na_brZ;
    this.nalogZaIsplatu.svrha_placanja = forma.value.svrha_placanja;
    this.nalogZaIsplatu.valuta = this.valuta;
    this.nalogZaIsplatu.racun_duznika = this.racun_duznika;
    console.log(this.nalogZaIsplatu);
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

ngOnInit() {

  this.getValute();
  this.getRacuniLica();

}
}


