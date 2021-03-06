import { Component, OnInit } from '@angular/core';
import { RacunLicaService } from '../../services/racun-lica.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { RacunLica } from '../../modeli/racunLica';
import { AnalitikaIzvoda } from '../../modeli/analitika-izvoda';
import { AnalitikaService } from '../../services/analitika.service';

@Component({
  selector: 'app-ukidanje-racuna',
  templateUrl: './ukidanje-racuna.component.html',
  styleUrls: ['./ukidanje-racuna.component.css']
})
export class UkidanjeRacunaComponent implements OnInit {

racunId: string;
racuni: RacunLica[];
racunEdit: RacunLica;
racun: RacunLica;
datum1: Date = new Date('MM/dd/yyyy');
model: any = {};
date1 = new Date(this.model.datum_otvaranja);
analitikaPrenosa: AnalitikaIzvoda = new AnalitikaIzvoda(0,"","","",this.date1,this.date1,null,0,"","",0,"",false,0,0,"",null);

  constructor(private racuniService: RacunLicaService,
              private location: Location,
              private route: ActivatedRoute,
              private analitikaService: AnalitikaService
                         ) { }


    getRacuniLica(): void{
      this.racuniService.getRacuni().subscribe(racuni => this.racuni = racuni);
     }
              
    getRacun(){
      this.racuniService.getRacun(this.racunId).subscribe(
        (racun) =>  {
          this.analitikaPrenosa.racun_duznika = racun;
          this.analitikaPrenosa.datum_prijema = new Date;
          this.analitikaPrenosa.poverilac_primalac = '';
        }
      );
     }
                 
     ukiniRacun(id: number){
       console.log(id);
       this.getRacun();
       console.log(this.analitikaPrenosa.racun_duznika);
       this.analitikaService.insertNalogZaPrenos(this.analitikaPrenosa, id).subscribe();
       
     }

     deleteRacun2(racun: RacunLica) {
      this.racuniService.deleteRacun2(racun).subscribe();
      this.racuni = this.racuni.filter(k => k !== racun);
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
    this.getRacuniLica();
}
}
