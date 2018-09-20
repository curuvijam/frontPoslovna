import { RacuniEditComponent } from './racun-lica/racuni-edit/racuni-edit.component';
import { RacunLicaComponent } from './racun-lica/racun-lica.component';
import { KlijentEditComponent } from './klijent/klijent-edit/klijent-edit.component';
import { KlijentComponent } from './klijent/klijent.component';
import { NaseljenaMestaComponent } from './naseljena-mesta/naseljena-mesta.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DrzaveEditComponent } from './drzave/drzave-edit/drzave-edit.component';
import { NaseljenaMestaEditComponent } from './naseljena-mesta/naseljena-mesta-edit/naseljena-mesta-edit.component';
import { KlijentiListComponent } from './klijent/klijenti-list/klijenti-list.component';
import { NalogZaIsplatuComponent } from './nalog-za-isplatu/nalog-za-isplatu.component';
import { ValuteComponent } from './valute/valute.component';
import { ValuteEditComponent } from './valute/valute-edit/valute-edit.component';
import { LoginComponent } from './login/login.component';
import { KursValutiComponent } from './kurs-valuti/kurs-valuti.component';
import { KursnaListaComponent } from './kursna-lista/kursna-lista.component';
import { NalogZaUplatuComponent } from './nalog-za-uplatu/nalog-za-uplatu.component';
import { IzvestajComponent } from './izvestaj/izvestaj.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'drzave', component: DrzaveComponent} ,
  { path: 'naseljenaMesta', component: NaseljenaMestaComponent},
  { path: 'drzave/:drzavaId', component: DrzaveEditComponent},
  { path: 'naseljena-mesta/:naseljenoMestoId', component: NaseljenaMestaEditComponent},
  { path: 'drzave-edit', component: DrzaveEditComponent},
  { path: 'naseljena-mesta-edit', component: NaseljenaMestaEditComponent},
  { path: 'drzave', component: DrzaveComponent },
  { path: 'naseljenaMesta', component: NaseljenaMestaComponent},
  { path: 'klijent', component: KlijentComponent},
  { path: 'naseljena-mesta-edit/:drzavaId', component: NaseljenaMestaEditComponent },
  { path: 'naseljena-mesta/drzave/:drzavaId', component: NaseljenaMestaComponent },
  { path: 'racuni', component: RacunLicaComponent},
  { path: 'racuni/:racunId', component: RacuniEditComponent},
  { path: 'racuni-edit', component: RacuniEditComponent},
  { path: 'drzave/naseljena-mesta/:naseljenoMestoId', component: DrzaveComponent },
  { path: 'drzave-edit/:naseljenoMestoId', component: DrzaveEditComponent},
  { path: 'drzave-edit', component: DrzaveEditComponent},
  { path: 'naseljena-mesta', component: NaseljenaMestaComponent},
  { path: 'klijenti', component: KlijentiListComponent},
  { path: 'racuni', component: RacunLicaComponent},
  { path: 'racuni/:racunId', component: RacuniEditComponent},
  { path: 'racuni-edit', component: RacuniEditComponent},
  { path: 'klijenti/klijent/pravno/:klijentId', component: KlijentEditComponent},
  { path: 'klijenti/klijent/fizicko/:klijentId', component: KlijentEditComponent},
  { path: 'nalogZaIsplatu', component: NalogZaIsplatuComponent},
  { path: 'racuni-edit/fizicko/:klijentFizickoId', component: RacuniEditComponent},
  { path: 'racuni-edit/pravno/:klijentPravnoId', component: RacuniEditComponent},
  { path: 'valute', component: ValuteComponent},
  { path: 'valute-edit', component: ValuteEditComponent},
  { path: 'valute/:valutaId', component: ValuteEditComponent},
  { path: 'kurs-valuti', component: KursValutiComponent},
  { path: 'kursna-lista', component: KursnaListaComponent},
  {path:  'nalogZaUplatu', component: NalogZaUplatuComponent},
  { path: 'izvestaj/:racunId', component: IzvestajComponent},


];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
