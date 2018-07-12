import { Component, OnInit } from '@angular/core';
import { KursnaLista } from '../modeli/kursna-lista';
import { KursnaListaService } from '../services/kursna-lista.service';

@Component({
  selector: 'app-kursna-lista',
  templateUrl: './kursna-lista.component.html',
  styleUrls: ['./kursna-lista.component.css']
})
export class KursnaListaComponent implements OnInit {

  kursneListe: KursnaLista[];
 
  getKursneListe(): void {
    this.kursneListeService.getKursneListe()
      .subscribe(kursneListe => this.kursneListe = kursneListe);
    
  }



  constructor(private kursneListeService: KursnaListaService) { }

  ngOnInit() {
    this.getKursneListe();
  }


}
