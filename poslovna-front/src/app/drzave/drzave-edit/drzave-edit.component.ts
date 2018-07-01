import { Component, OnInit } from '@angular/core';
import { NovaDrzava } from '../../modeli/nova-drzava';
import { Drzava } from '../../modeli/drzava';
import { DrzaveService } from '../../services/drzave.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-drzave-edit',
  templateUrl: './drzave-edit.component.html',
  styleUrls: ['./drzave-edit.component.css']
})
export class DrzaveEditComponent implements OnInit {

  novaDrzava: NovaDrzava = new NovaDrzava("","");
  drzavaId: string;
  drzavaEdit: Drzava;
  drzave: Drzava[];

  constructor(private drzaveService: DrzaveService,
              private location: Location,
              private route: ActivatedRoute) { }


              getDrzava() {
                this.drzaveService.getDrzava(this.drzavaId).subscribe(
                  (drzava) => this.drzavaEdit = drzava
                );
              }

              novaDrzavaSubmit(forma: NgForm) {
                this.novaDrzava.sifra_drzave = forma.value.sifra_drzave;
                this.novaDrzava.naziv = forma.value.naziv;
               
                this.drzaveService.insertDrzava(this.novaDrzava).subscribe();
                forma.reset();
                this.location.back();
              }
            
            
            
              drzavaUpdtSubmit(forma: NgForm){
                this.drzavaEdit.sifra_drzave = forma.value.sifra_drzave;
                this.drzavaEdit.naziv = forma.value.naziv;
                this.drzaveService.updateDrzava(this.drzavaEdit).subscribe();
                forma.reset();
                this.location.back();
              }
            
              drzavaEdt() {
                this.drzaveService.updateDrzava(this.drzavaEdit).subscribe();
                this.location.back();
              }
            

  ngOnInit() {
    if(this.route.snapshot.params['drzavaId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.drzavaId = params["drzavaId"];
        }
      );
      this.getDrzava();
  }
}
}
