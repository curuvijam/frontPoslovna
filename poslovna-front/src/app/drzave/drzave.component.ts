import { Component, OnInit, Input } from '@angular/core';
import { DrzaveService } from '../services/drzave.service';
import { Location } from '@angular/common';
import { Drzava } from '../modeli/drzava';

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
               private location: Location) { }

  ngOnInit() {
    this.getDrzave();
    console.log(this.drzave);
  }

}
