import { AnalitikaIzvoda } from './../modeli/analitika-izvoda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nalog-za-isplatu',
  templateUrl: './nalog-za-isplatu.component.html',
  styleUrls: ['./nalog-za-isplatu.component.css']
})
export class NalogZaIsplatuComponent implements OnInit {

  analitikaIzvoda: AnalitikaIzvoda;
  constructor() { }

  ngOnInit() {
  }

}
