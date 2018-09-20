import { RacunLicaService } from './../services/racun-lica.service';
import { RacunLica } from './../modeli/racunLica';
import { KlijentService } from './../klijent/klijent.service';
import { Params } from '@angular/router/src/shared';
import { ActivatedRoute } from '@angular/router';
import { KlijentPravno } from './../klijent/klijent-pravno';
import { KlijentFizicko } from './../klijent/klijent-fizicko';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izvestaj',
  templateUrl: './izvestaj.component.html',
  styleUrls: ['./izvestaj.component.css']
})
export class IzvestajComponent implements OnInit {
  racunLica: RacunLica;
  racunId: string;
  datumPoc: Date = new Date('yyyy-MM-dd');
  datumKraj: Date = new Date('yyyy-MM-dd');

  constructor(
    private route: ActivatedRoute,
    private racunService: RacunLicaService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.racunId = params['racunId'];
    });

    this.getRacun();
  }

  getRacun() {
    this.racunService.getRacun(this.racunId).subscribe(
      data => {
        this.racunLica = data;
      }
    );
  }

  prikaziIzvestaj() {
    console.log('usao u prikaziIzvestaj()');
    console.log(this.datumPoc);
    console.log(this.datumKraj);
  }
}
