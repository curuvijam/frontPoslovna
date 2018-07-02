import { Component, OnInit } from '@angular/core';
import { NaseljenaMestaService } from '../../services/naseljena-mesta.service';
import { NovoNaseljenoMesto } from '../../modeli/novo-naseljeno-mesto';
import { NaseljenoMesto } from '../../modeli/naseljeno-mesto';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-naseljena-mesta-edit',
  templateUrl: './naseljena-mesta-edit.component.html',
  styleUrls: ['./naseljena-mesta-edit.component.css']
})
export class NaseljenaMestaEditComponent implements OnInit {

  novoNaslejenoMesto: NovoNaseljenoMesto = new NovoNaseljenoMesto("","","");
  naseljenoMestoId: string;
  naseljenoMestoEdit: NaseljenoMesto;
  naseljenaMesta: NaseljenoMesto[];



  constructor(private naseljenaMestaService: NaseljenaMestaService,
              private location: Location,
              private route: ActivatedRoute) { }


  getNaseljenoMesto() {
    this.naseljenaMestaService.getNaseljenoMesto(this.naseljenoMestoId).subscribe(
      (naseljenoMesto) => this.naseljenoMestoEdit = naseljenoMesto
    );
  }


  novoNaseljenoMestoSubmit(forma: NgForm) {
    this.novoNaslejenoMesto.sifra_mesta = forma.value.sifra_mesta;
    this.novoNaslejenoMesto.naziv = forma.value.naziv;
    this.novoNaslejenoMesto.ptt_oznaka = forma.value.ptt_oznaka;
   
    this.naseljenaMestaService.insertNaseljenaMesta(this.novoNaslejenoMesto).subscribe();
    forma.reset();
    this.location.back();
  }

  naslejenoMestoUpdtSubmit(forma: NgForm){
    this.naseljenoMestoEdit.sifra_mesta = forma.value.sifra_mesta;
    this.naseljenoMestoEdit.naziv = forma.value.naziv;
    this.naseljenoMestoEdit.ptt_oznaka =  forma.value.ptt_oznaka;

    this.naseljenaMestaService.updateNaseljenoMesto(this.naseljenoMestoEdit).subscribe();
    forma.reset();
    this.location.back();
  }

  naseljenoMestoEdt() {
    this.naseljenaMestaService.updateNaseljenoMesto(this.naseljenoMestoEdit).subscribe();
    this.location.back();
  }


  ngOnInit() {
    if(this.route.snapshot.params['naseljenoMestoId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.naseljenoMestoId = params["naseljenoMestoId"];
        }
      );
      this.getNaseljenoMesto();
  }
  }

}
