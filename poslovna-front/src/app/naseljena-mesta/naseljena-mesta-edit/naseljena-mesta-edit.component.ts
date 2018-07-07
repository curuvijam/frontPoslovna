import { Component, OnInit , Input} from '@angular/core';
import { NaseljenaMestaService } from '../../services/naseljena-mesta.service';
import { NovoNaseljenoMesto } from '../../modeli/novo-naseljeno-mesto';
import { NaseljenoMesto } from '../../modeli/naseljeno-mesto';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DrzaveService } from '../../services/drzave.service';
import { Drzava } from '../../modeli/drzava';


@Component({
  selector: 'app-naseljena-mesta-edit',
  templateUrl: './naseljena-mesta-edit.component.html',
  styleUrls: ['./naseljena-mesta-edit.component.css']
})
export class NaseljenaMestaEditComponent implements OnInit {


  naseljenoMestoId: string;
  naseljenoMestoEdit: NaseljenoMesto;
  naseljenaMesta: NaseljenoMesto[];
  drzavaId: string;
  @Input() drzaveShow: Drzava;
  drzave: Drzava[];
  drzavaEdit: Drzava;
  drzava: Drzava

  novoNaslejenoMesto: NovoNaseljenoMesto = new NovoNaseljenoMesto(0,"","",null);

  constructor(private naseljenaMestaService: NaseljenaMestaService,
              private drzaveService: DrzaveService,
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
    this.novoNaslejenoMesto.drzava =  this.drzava;
  
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

  getDrzave(): void {
    this.drzaveService.getDrzave()
      .subscribe(drzave => this.drzave = drzave);
    
  }

  getDrzava() {
    this.drzaveService.getDrzava(this.drzavaId).subscribe(
      (drzava) => this.drzavaEdit = drzava
    );
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
    this.getDrzave();
  }

}
