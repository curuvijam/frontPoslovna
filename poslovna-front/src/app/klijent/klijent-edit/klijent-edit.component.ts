import { KlijentFizicko } from './../klijent-fizicko';
import { KlijentPravno } from './../klijent-pravno';
import { KlijentService } from './../klijent.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-klijent-edit',
  templateUrl: './klijent-edit.component.html',
  styleUrls: ['./klijent-edit.component.css']
})
export class KlijentEditComponent implements OnInit {
  klijentId: number;
  pravno: boolean;
  klijent: any;

  constructor(
    private route: ActivatedRoute,
    private klijentService: KlijentService) {}

  ngOnInit() {
    if (this.route.snapshot.url[2].path === 'pravno') {
      this.route.params.subscribe(
        (params: Params) => {
          this.klijentId = params['klijentId'];
          this.pravno = true;
        }
      );
    }
    if (this.route.snapshot.url[2].path === 'fizicko') {
      this.route.params.subscribe(
        (params: Params) => {
          this.klijentId = params['klijentId'];
          this.pravno = false;
        }
      );
    }

    if ( this.pravno ) {
      this.klijentService.getPravnoLice(this.klijentId).subscribe(
        data => {
          this.klijent = data;
        }
      );
    } else {
      this.klijentService.getFizickoLice(this.klijentId).subscribe(
        data => {
          this.klijent = data;
        }
      );
    }

  }

  updateKlijent() {
    if ( this.pravno ) {
      this.klijentService.updatePravnoLice(this.klijent).subscribe();
    } else {
      this.klijentService.updateFizickoLice(this.klijent).subscribe();
    }
  }
}
