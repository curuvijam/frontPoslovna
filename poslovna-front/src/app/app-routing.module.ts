import { KlijentComponent } from './klijent/klijent.component';
import { NaseljenaMestaComponent } from './naseljena-mesta/naseljena-mesta.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DrzaveEditComponent } from './drzave/drzave-edit/drzave-edit.component';
import { NaseljenaMestaEditComponent } from './naseljena-mesta/naseljena-mesta-edit/naseljena-mesta-edit.component';

const routes: Routes = [
<<<<<<< HEAD
  { path: 'drzave', component: DrzaveComponent} ,
  { path: 'naseljenaMesta', component: NaseljenaMestaComponent},
  { path: 'drzave/:drzavaId', component: DrzaveEditComponent},
  { path: 'naseljena-mesta/:naseljenoMestoId', component: NaseljenaMestaEditComponent},
  {path : 'drzave-edit', component: DrzaveEditComponent},
  {path: 'naseljena-mesta-edit', component: NaseljenaMestaEditComponent},
=======
  { path: 'drzave', component: DrzaveComponent },
  { path: 'naseljenaMesta', component: NaseljenaMestaComponent},
  { path: 'klijent', component: KlijentComponent}
>>>>>>> e0eb56ab4095dcec3c4c6670c6bf6a95ff7bf0db
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
