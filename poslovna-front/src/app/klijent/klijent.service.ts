import { KlijentPravno } from './klijent-pravno';
import { Observable } from 'rxjs/Observable';
import { KlijentFizicko } from './klijent-fizicko';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders( { 'Content-type': 'application/json'})
};

@Injectable()
export class KlijentService {

  private url_fizicko = 'http://localhost:8080/fizickoLice';
  private url_pravno = 'http://localhost:8080/pravnoLice';

  constructor(private http: HttpClient) { }

  addFizickoLice(fizicko: KlijentFizicko): Observable<KlijentFizicko> {
    return this.http.post<KlijentFizicko>(this.url_fizicko, fizicko, httpOptions);
  }

  addPravnoLice(pravno: KlijentPravno): Observable<KlijentPravno> {
    return this.http.post<KlijentPravno>(this.url_pravno, pravno, httpOptions);
  }



}
