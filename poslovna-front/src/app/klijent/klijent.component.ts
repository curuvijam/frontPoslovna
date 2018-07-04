import { KlijentService } from './klijent.service';
import { KlijentFizicko } from './klijent-fizicko';
import { KlijentPravno } from './klijent-pravno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  klijentPravno = new KlijentPravno('', '', '', '', '');
  klijentFizicko = new KlijentFizicko('', '', '', '', '');
  switch = true;
  loading: boolean;

  constructor(private klijentService: KlijentService) { }

  ngOnInit() {
  }

  toggle() {
    this.switch = !this.switch;
  }

  dodajFizicko() {
    this.klijentService.addFizickoLice(this.klijentFizicko).subscribe();
  }

  dodajPravno() {
    this.klijentService.addPravnoLice(this.klijentPravno).subscribe();
  }

}
