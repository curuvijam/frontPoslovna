import { AnalitikaService } from './../services/analitika.service';
import { AnalitikaIzvoda } from './../modeli/analitika-izvoda';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nalog-za-isplatu',
  templateUrl: './nalog-za-isplatu.component.html',
  styleUrls: ['./nalog-za-isplatu.component.css']
})
export class NalogZaIsplatuComponent implements OnInit {

  analitikaIzvoda: AnalitikaIzvoda;
  file: any;

  constructor(private analitikaService: AnalitikaService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.file = event.srcElement.files;
    console.log(this.file);
  }

  upload() {
    this.analitikaService.loadFromFile(this.file).subscribe();
  }

}
