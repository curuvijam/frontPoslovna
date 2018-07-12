import { Component, OnInit } from '@angular/core';
import { KursValuti } from '../modeli/kurs-valuti';
import { KursValutiService } from '../services/kurs-valuti.service';

@Component({
  selector: 'app-kurs-valuti',
  templateUrl: './kurs-valuti.component.html',
  styleUrls: ['./kurs-valuti.component.css']
})
export class KursValutiComponent implements OnInit {

  kursVal: KursValuti[];
 
  getKursValuti(): void {
    this.kursValutiService.getKursValuti()
      .subscribe(kursVal => this.kursVal = kursVal);
    
  }
  



  constructor(private kursValutiService: KursValutiService) { }

  ngOnInit() {
    this.getKursValuti();
  }

}
