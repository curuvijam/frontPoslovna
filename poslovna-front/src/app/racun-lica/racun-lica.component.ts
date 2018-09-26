import { Component, OnInit, Input } from '@angular/core';
import { RacunLica } from '../modeli/racunLica';
import { RacunLicaService } from '../services/racun-lica.service';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { NovRacunLica } from '../modeli/nov-racunLica';
import { KlijentPravno } from '../klijent/klijent-pravno';
import { KlijentFizicko } from '../klijent/klijent-fizicko';
import { KlijentService } from '../klijent/klijent.service';


@Component({
  selector: 'app-racun-lica',
  templateUrl: './racun-lica.component.html',
  styleUrls: ['./racun-lica.component.css']
})
export class RacunLicaComponent implements OnInit {

  @Input() racunShow: RacunLica;

  racuni: RacunLica[];
  racunId: string;
  racunEdit: RacunLica;

  getRacuniLica(): void {
    this.racuniService.getRacuni().subscribe(racuni => this.racuni = racuni);
    console.log(this.racuni);
  }

  getRacun() {
    this.racuniService.getRacun(this.racunId).subscribe((racun) => this.racunEdit = racun);
  }


  deleteRacun(racun: RacunLica) {
    this.racuniService.deleteRacun(racun).subscribe();
    this.racuni = this.racuni.filter(k => k !== racun);
  }

  constructor(private racuniService: RacunLicaService, private location: Location,
            private klijentService: KlijentService) { }

  ngOnInit() {
    this.getRacuniLica();
  }

}
