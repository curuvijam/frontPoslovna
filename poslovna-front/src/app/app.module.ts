import { KlijentEditComponent } from './klijent/klijent-edit/klijent-edit.component';
import { KlijentService } from './klijent/klijent.service';
import { KlijentComponent } from './klijent/klijent.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NaseljenaMestaComponent } from './naseljena-mesta/naseljena-mesta.component';
import { DrzaveEditComponent } from './drzave/drzave-edit/drzave-edit.component';
import { NaseljenaMestaEditComponent } from './naseljena-mesta/naseljena-mesta-edit/naseljena-mesta-edit.component';
import { DrzaveService } from './services/drzave.service';
import { NaseljenaMestaService } from './services/naseljena-mesta.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { KlijentiListComponent } from './klijent/klijenti-list/klijenti-list.component';

import { RacunLicaService } from './services/racun-lica.service';
import { RacuniEditComponent } from './racun-lica/racuni-edit/racuni-edit.component';
import { RacunLica } from './modeli/racunLica';
import { RacunLicaComponent } from './racun-lica/racun-lica.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ValuteService } from './services/valute.service';
import { NalogZaIsplatuComponent } from './nalog-za-isplatu/nalog-za-isplatu.component';
import { ValuteComponent } from './valute/valute.component';
import { ValuteEditComponent } from './valute/valute-edit/valute-edit.component';
import { LoginComponent } from './login/login.component';
import { ToggleLoginService } from './services/toggle-login.service';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DrzaveComponent,
    NaseljenaMestaComponent,
    DrzaveEditComponent,
    NaseljenaMestaEditComponent,
    KlijentComponent,
    RacuniEditComponent,
    RacunLicaComponent,
    KlijentiListComponent,
    KlijentEditComponent,
    RacunLicaComponent,
    RacuniEditComponent,
    NalogZaIsplatuComponent,
    ValuteComponent,
    ValuteEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    DrzaveService,
    NaseljenaMestaService,
    RacunLicaService,
    KlijentService,
    RacunLicaService,
    ValuteService,
    ToggleLoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
