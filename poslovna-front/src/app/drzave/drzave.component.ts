import { Component, OnInit, Input } from '@angular/core';
import { DrzaveService } from '../services/drzave.service';
import { Location } from '@angular/common';
import { Drzava } from '../modeli/drzava';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {

  @Input() drzaveShow: Drzava;

  drzave: Drzava[];
  drzavaId: string;
  drzavaEdit: Drzava;
  naseljenoMestoId: string;

  getDrzave(): void {
    this.drzaveService.getDrzave()
      .subscribe(drzave => this.drzave = drzave);
    
  }
  
    getDrzava() {
      this.drzaveService.getDrzava(this.drzavaId).subscribe(
        (drzava) => this.drzavaEdit = drzava
      );
    }

    deleteDrzava(drzava: Drzava) {
      this.drzaveService.deleteDrzava(drzava).subscribe();
      this.drzave = this.drzave.filter(k => k !== drzava);
    }


  constructor(private drzaveService: DrzaveService,
               private location: Location,
               private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.params['naseljenoMestoId']) {
      this.route.params.subscribe(
        (params: Params) => {
          this.naseljenoMestoId = params['naseljenoMestoId'];
        }
      
      );
      this.getDrzave();
    }
    this.getDrzave();
   
  }

}
