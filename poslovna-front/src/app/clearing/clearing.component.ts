import { Component, OnInit, Input } from '@angular/core';
import { Banka } from '../modeli/banka';

import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ClearingService } from '../services/clearing.service';
import { NgForm } from '@angular/forms';
import { Clearing } from '../modeli/clearing';

@Component({
  selector: 'app-clearing',
  templateUrl: './clearing.component.html',
  styleUrls: ['./clearing.component.css']
})
export class ClearingComponent implements OnInit {

  @Input() bankaShow: Banka;

  banka: Banka[];
  bankaId: string;
  bankaEdit: Banka;
  clearingId: string;
  clearingC: Clearing;

 

  getBanke(): void {
    this.clearingService.getBanke()
      .subscribe(banka => this.banka = banka);
  }
  
    getBanka() {
      this.clearingService.getBanka("1").subscribe(
        (bank) => this.bankaEdit = bank
      );
    }

    getAktivanClearing() {
      this.clearingService.getAktivanClearing().subscribe(
        ); 
        
        window.location.reload();
        
    }

    getObradjenClearing() {
      this.clearingService.getObradjenClearing().subscribe(
        ); 
    
    }


  constructor(private clearingService: ClearingService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBanka();
    this.getObradjenClearing();
  }

}
