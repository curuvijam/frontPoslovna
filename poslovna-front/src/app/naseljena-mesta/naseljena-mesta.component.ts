import { Component, OnInit, Input } from '@angular/core';
import { NaseljenaMestaService } from '../services/naseljena-mesta.service';
import { Location } from '@angular/common';
import { NaseljenoMesto } from '../modeli/naseljeno-mesto';

@Component({
  selector: 'app-naseljena-mesta',
  templateUrl: './naseljena-mesta.component.html',
  styleUrls: ['./naseljena-mesta.component.css']
})
export class NaseljenaMestaComponent implements OnInit {


  
  @Input() naseljenaMestaShow: NaseljenoMesto;

  naseljenaMesta: NaseljenoMesto[];
  naseljenoMestoId: string;
  naseljenaMestaEdit: NaseljenoMesto;

  getNaseljenaMesta(): void {
    this.naseljenaMestaService.getNaseljenaMesta()
      .subscribe(naseljenaMesta => this.naseljenaMesta = naseljenaMesta);
  }
  
    getNaseljenoMesto() {
      this.naseljenaMestaService.getNaseljenoMesto(this.naseljenoMestoId).subscribe(
        (naseljenoMesto) => this.naseljenaMestaEdit = naseljenoMesto
      );
    }

    deleteNaseljenoMesto(naseljenoMesto: NaseljenoMesto) {
      this.naseljenaMestaService.deleteNaseljenoMesto(naseljenoMesto).subscribe();
      this.naseljenaMesta = this.naseljenaMesta.filter(k => k !== naseljenoMesto);
    }


  constructor(private naseljenaMestaService: NaseljenaMestaService,
              private location: Location) { }

  ngOnInit() {
    this.getNaseljenaMesta();

  }

}
