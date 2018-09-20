import { Component, OnInit } from '@angular/core';
import { AnalitikaIzvoda } from '../modeli/analitika-izvoda';
import { AnalitikaService } from '../services/analitika.service';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { NovaUplata } from '../modeli/nova-uplata';
import { Valuta } from '../modeli/valuta';
import { Location } from '@angular/common';
import { RacunLica } from '../modeli/racunLica';
import { RacunLicaService } from '../services/racun-lica.service';
import { ValuteService } from '../services/valute.service';

@Component({
  selector: 'app-nalog-za-uplatu',
  templateUrl: './nalog-za-uplatu.component.html',
  styleUrls: ['./nalog-za-uplatu.component.css']
})
export class NalogZaUplatuComponent implements OnInit {
  valutaShow: Valuta;
  datum1: Date = new Date('MM/dd/yyyy');
  model: any = {};
  date1 = new Date(this.model.datum_otvaranja);
  analitikaIzvoda: AnalitikaIzvoda;
  selectedFiles: FileList;
  file: File;
  nalogZaUplatu:  AnalitikaIzvoda = new AnalitikaIzvoda(0,"","","",this.date1,this.date1,null,0,"","",0,"",false,0,0,"",null);
  valuta: Valuta;
  racun_duznika: RacunLica;
  racuni: RacunLica[];
  racunId: string;
  valute: Valuta[];
  racuniLicaShow: RacunLica;


  constructor(private analitikaService: AnalitikaService,
              private location: Location, private racuniService: RacunLicaService,
              private valuteService : ValuteService
              ) { }

  onChange(event) {
    this.selectedFiles = event.target.files;
    console.log(this.file);
  }

  upload() {
    this.file = this.selectedFiles.item(0);
    this.analitikaService.loadFromFileUplata(this.file).subscribe();
  }

  noviNalogUplataSubmit(forma: NgForm){
      this.nalogZaUplatu.duznik = forma.value.duznik;
      this.nalogZaUplatu.iznos = forma.value.iznos;
      this.nalogZaUplatu.datum_prijema = forma.value.datum_prijema;
      this.nalogZaUplatu.model_odobrenja = forma.value.model_odobrenja;
      this.nalogZaUplatu.poverilac_primalac = forma.value.poverilac_primalac;
      this.nalogZaUplatu.poziv_na_brO = forma.value.poziv_na_brO;
      this.nalogZaUplatu.svrha_placanja = forma.value.svrha_placanja;
      this.nalogZaUplatu.valuta = this.valuta;
      this.nalogZaUplatu.racun_duznika = this.racun_duznika;

      this.analitikaService.insertNalogZaUplatu(this.nalogZaUplatu).subscribe();
      forma.reset();
      this.location.back();

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

}
