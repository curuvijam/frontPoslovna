import { Component, OnInit, Input} from '@angular/core';
import { NovaValuta } from '../../modeli/nova-valuta';
import { Valuta } from '../../modeli/valuta';
import { ValuteService } from '../../services/valute.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Drzava } from '../../modeli/drzava';
import { DrzaveService } from '../../services/drzave.service';
@Component({
  selector: 'app-valute-edit',
  templateUrl: './valute-edit.component.html',
  styleUrls: ['./valute-edit.component.css']
})
export class ValuteEditComponent implements OnInit {


  novaValuta: NovaValuta = new NovaValuta(0,"","",false,null);
  valutaId: string;
  valutaEdit: Valuta;
  valute: Valuta[];
  drzava: Drzava;
  @Input() drzaveShow: Drzava;
  drzave: Drzava[];
  drzavaEdit: Drzava;
  drzavaId: string;


   getValute(): void {
    this.valuteService.getValute()
      .subscribe(valute => this.valute = valute);
    
  }
  
    getValuta() {
      this.valuteService.getValuta(this.valutaId).subscribe(
        (valuta) => this.valutaEdit = valuta
      );
    }

    deleteValuta(valuta: Valuta) {
      this.valuteService.deleteValuta(valuta).subscribe();
      this.valute = this.valute.filter(k => k !== valuta);
    }

    novaValutaSubmit(forma: NgForm) {
      this.novaValuta.id_valute = forma.value.id_valute;
      this.novaValuta.sifra = forma.value.sifra;
      this.novaValuta.naziv = forma.value.naziv;
      this.novaValuta.domicilna =  forma.value.domicilna;
      this.novaValuta.drzava = this.drzava;
      this.valuteService.insertValuta(this.novaValuta).subscribe();
      forma.reset();
      this.location.back();
    }
  
    valutaUpdateSubmit(forma: NgForm){
      this.valutaEdit.id_valute = forma.value.sifra_mesta;
      this.valutaEdit.sifra = forma.value.naziv;
      this.valutaEdit.naziv =  forma.value.ptt_oznaka;
      this.valutaEdit.domicilna =  forma.value.domicilna;
      
      this.valuteService.updateValuta(this.valutaEdit).subscribe();
      forma.reset();
      this.location.back();
    }

    valutaEdt() {
      this.valuteService.updateValuta(this.valutaEdit).subscribe();
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



  constructor(private valuteService: ValuteService,
              private drzaveService: DrzaveService,
             private location: Location,
             private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.params['valutaId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.valutaId = params["valutaId"];
        }
      );
      this.getValuta();
  }
  this.getDrzave();
}

}
