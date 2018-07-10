import { KlijentService } from './../klijent.service';
import { KlijentFizicko } from './../klijent-fizicko';
import { KlijentPravno } from './../klijent-pravno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klijenti-list',
  templateUrl: './klijenti-list.component.html',
  styleUrls: ['./klijenti-list.component.css']
})
export class KlijentiListComponent implements OnInit {

  klijentiPravna: KlijentPravno[];
  klijentiFizicka: KlijentFizicko[];

  constructor(private klijentService: KlijentService) { }

  ngOnInit() {
    this.klijentService.getFizickaLica().subscribe(
      data => {
        this.klijentiFizicka = data;
      }
    );
    this.klijentService.getPravnaLica().subscribe(
      data => {
        this.klijentiPravna = data;
      }
    );
  }

  obrisiFizicko(id: number) {
    this.klijentService.deleteFizickoLice(id).subscribe();
    for (const klijent of this.klijentiFizicka) {
      if (klijent.id === id) {
        this.klijentiFizicka.splice(this.klijentiFizicka.indexOf(klijent), 1);
      }
    }
  }

  obrisiPravno(id: number) {
    this.klijentService.deletePravnoLice(id).subscribe();
    for (const klijent of this.klijentiPravna) {
      if (klijent.id === id) {
        this.klijentiPravna.splice(this.klijentiPravna.indexOf(klijent), 1);
      }
    }
  }
}
