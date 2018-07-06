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


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DrzaveComponent,
    NaseljenaMestaComponent,
    DrzaveEditComponent,
    NaseljenaMestaEditComponent,
    KlijentComponent,
    KlijentiListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DrzaveService,
    NaseljenaMestaService,
    KlijentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
