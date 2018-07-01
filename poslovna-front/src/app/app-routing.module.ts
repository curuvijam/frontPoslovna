import { NaseljenaMestaComponent } from './naseljena-mesta/naseljena-mesta.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { DrzaveEditComponent } from './drzave/drzave-edit/drzave-edit.component';
import { NaseljenaMestaEditComponent } from './naseljena-mesta/naseljena-mesta-edit/naseljena-mesta-edit.component';

const routes: Routes = [
  { path: 'drzave', component: DrzaveComponent} ,
  { path: 'naseljenaMesta', component: NaseljenaMestaComponent},
  { path: 'drzave/:drzavaId', component: DrzaveEditComponent},
  { path: 'naseljena-mesta/:naseljenoMestoId', component: NaseljenaMestaEditComponent},
  {path : 'drzave-edit', component: DrzaveEditComponent},
  {path: 'naseljena-mesta-edit', component: NaseljenaMestaEditComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
})
export class AppRoutingModule { }
