import { Component, OnInit, Input } from '@angular/core';
import { Valuta } from '../modeli/valuta';
import { ValuteService } from '../services/valute.service';


@Component({
  selector: 'app-valute',
  templateUrl: './valute.component.html',
  styleUrls: ['./valute.component.css']
})
export class ValuteComponent implements OnInit {
  @Input() valuteShow: Valuta;

  valute: Valuta[];
  valutaId: string;
  valutaEdit: Valuta;
  

  getValute(): void {
    this.valuteService.getValute()
      .subscribe(valute => this.valute = valute);
    
  }
  
    getValuta() {
      this.valuteService.getValuta(this.valutaId).subscribe(
        (valuta) => this.valutaEdit = valuta
      );
    }

    deleteValuta(valuta: Valuta) {
      this.valuteService.deleteValuta(valuta).subscribe();
      this.valute = this.valute.filter(k => k !== valuta);
    }




  constructor(private valuteService: ValuteService) {}

  ngOnInit() {
    
    this.getValute();
  }

}
