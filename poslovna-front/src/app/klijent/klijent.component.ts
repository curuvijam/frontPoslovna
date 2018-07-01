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

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.switch = !this.switch;
  }

}
