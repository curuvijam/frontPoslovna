import { Component, OnInit } from '@angular/core';
import { AnalitikaIzvoda } from '../modeli/analitika-izvoda';
import { AnalitikaService } from '../services/analitika.service';

@Component({
  selector: 'app-nalog-za-uplatu',
  templateUrl: './nalog-za-uplatu.component.html',
  styleUrls: ['./nalog-za-uplatu.component.css']
})
export class NalogZaUplatuComponent implements OnInit {

 
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
