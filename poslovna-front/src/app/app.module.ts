import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { DrzaveComponent } from './drzave/drzave.component';
import { NaseljenaMestaComponent } from './naseljena-mesta/naseljena-mesta.component';
<<<<<<< HEAD
import { KlijentComponent } from './klijent/klijent.component';
import { FormsModule } from '@angular/forms';
=======
import { DrzaveEditComponent } from './drzave/drzave-edit/drzave-edit.component';
import { NaseljenaMestaEditComponent } from './naseljena-mesta/naseljena-mesta-edit/naseljena-mesta-edit.component';
import { DrzaveService } from './services/drzave.service';
import { NaseljenaMestaService } from './services/naseljena-mesta.service';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

>>>>>>> 8d8b704862537160a40c143d6bc4e122e25c59a4

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DrzaveComponent,
    NaseljenaMestaComponent,
<<<<<<< HEAD
    KlijentComponent
=======
    DrzaveEditComponent,
    NaseljenaMestaEditComponent
>>>>>>> 8d8b704862537160a40c143d6bc4e122e25c59a4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FormsModule
=======
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [
    DrzaveService,
    NaseljenaMestaService,
>>>>>>> 8d8b704862537160a40c143d6bc4e122e25c59a4
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
