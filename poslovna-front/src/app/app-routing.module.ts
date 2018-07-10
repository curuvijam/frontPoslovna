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



const routes: Routes = [
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
  { path: 'racuni-edit/:klijentFizickoId', component: RacuniEditComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
