import { Component, OnInit } from '@angular/core';
import { NovRacunLica } from '../../modeli/nov-racunLica';
import { RacunLica } from '../../modeli/racunLica';
import { RacunLicaService } from '../../services/racun-lica.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Params } from '@angular/router/src/shared';
import { Location } from '@angular/common';
import { KlijentFizicko } from '../../klijent/klijent-fizicko';

@Component({
  selector: 'app-racuni-edit',
  templateUrl: './racuni-edit.component.html',
  styleUrls: ['./racuni-edit.component.css']
})
export class RacuniEditComponent implements OnInit {

  
  datum1: Date = new Date("MM/dd/yyyy");
  model: any = {};
  date1 = new Date(this.model.datum_otvaranja);
  noviRacun: NovRacunLica = new NovRacunLica("",this.date1, false);
  racunId: string;
  racunEdit: RacunLica;
  racuni: RacunLica[];
  noviKlijent: KlijentFizicko = new KlijentFizicko("","", "", "", "");

  

  constructor(private racunService: RacunLicaService,
              private location: Location,
              private route: ActivatedRoute) { }


              getRacun() {
                this.racunService.getRacun(this.racunId).subscribe(
                  (racun) => this.racunEdit = racun
                );
              }

              noviRacunSubmit(forma: NgForm) {
                this.noviRacun.br_racuna = forma.value.br_racuna;
                this.noviRacun.datum_otvaranja = forma.value.datum_otvaranja;
                
               
                this.racunService.insertRacun(this.noviRacun,this.noviKlijent.id).subscribe();
                console.log(this.noviRacun)
                forma.reset();
                this.location.back();
              }
            
            
            
              racunUpdateSubmit(forma: NgForm){
                this.racunEdit.br_racuna = forma.value.br_racuna;
                this.racunEdit.datum_otvaranja = forma.value.datum_otvaranja;
                this.racunService.updateRacun(this.racunEdit).subscribe();
                forma.reset();
                //this.location.back();
              }
            
              racunEdt() {
                this.racunService.updateRacun(this.racunEdit).subscribe();
                //this.location.back();
              }
            

  ngOnInit() {
    if(this.route.snapshot.params['racunId']){
      this.route.params.subscribe(
        (params: Params) => {
          this.racunId = params["racunId"];
        }
      );
      this.getRacun(); 
      
  }
}

}
