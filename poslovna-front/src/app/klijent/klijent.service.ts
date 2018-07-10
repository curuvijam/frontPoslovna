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
  private url_fizicka = 'http://localhost:8080/fizickaLica';
  private url_pravna = 'http://localhost:8080/pravnaLica';

  constructor(private http: HttpClient) { }

  addFizickoLice(fizicko: KlijentFizicko): Observable<KlijentFizicko> {
    return this.http.post<KlijentFizicko>(this.url_fizicko, fizicko, httpOptions);
  }

  addPravnoLice(pravno: KlijentPravno): Observable<KlijentPravno> {
    return this.http.post<KlijentPravno>(this.url_pravno, pravno, httpOptions);
  }

  getFizickaLica(): Observable<KlijentFizicko[]> {
    return this.http.get<KlijentFizicko[]>(this.url_fizicka, httpOptions);
  }

  getPravnaLica(): Observable<KlijentPravno[]> {
    return this.http.get<KlijentPravno[]>(this.url_pravna, httpOptions);
  }

  updateFizickoLice(klijent: KlijentFizicko): Observable<KlijentFizicko> {
    return this.http.put<KlijentFizicko>(this.url_fizicko, klijent,  httpOptions);
  }

  deleteFizickoLice(id: number): Observable<KlijentFizicko> {
    return this.http.delete<KlijentFizicko>(this.url_fizicko + '/' + id, httpOptions);
  }

  updatePravnoLice(klijent: KlijentPravno): Observable<KlijentPravno> {
    return this.http.put<KlijentPravno>(this.url_pravno, klijent,  httpOptions);
  }

  deletePravnoLice(id: number): Observable<KlijentPravno> {
    return this.http.delete<KlijentPravno>(this.url_pravno + '/' + id, httpOptions);
  }

  getPravnoLice(id: number): Observable<KlijentPravno> {
    return this.http.get<KlijentPravno>(this.url_pravno + '/' + id, httpOptions);
  }

  getFizickoLice(id: number): Observable<KlijentFizicko> {
    return this.http.get<KlijentFizicko>(this.url_fizicko + '/' + id, httpOptions);
  }



}
