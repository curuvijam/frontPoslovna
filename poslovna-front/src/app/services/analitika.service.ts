import { Observable } from 'rxjs/Observable';
import {
  HttpHeaders,
  HttpClient,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovaUplata } from '../modeli/nova-uplata';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NovaIsplata } from '../modeli/nova-isplata';
import { AnalitikaIzvoda } from '../modeli/analitika-izvoda';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable()
export class AnalitikaService {
  private url_analitikaFile = 'http://localhost:8080/loadAnalitikaIsplata';
  private url_analitikaFileUplata = 'http://localhost:8080/loadAnalitikaUplata';
  private urlUplata = 'http://localhost:8080/analitikaUplata';
  private urlIsplata = 'http://localhost:8080/analitikaIsplata';
  private urlPrenos = 'http://localhost:8080/analitikaPrenos';

  constructor(private http: HttpClient) {}

  loadFromFile(file: File): Observable<HttpEvent<{}>> {
    // tslint:disable-next-line:prefer-const
    let formData: FormData = new FormData();

    formData.append('file', file);
    console.log(file);

    const req = new HttpRequest('POST', this.url_analitikaFile, formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  loadFromFileUplata(file: File): Observable<HttpEvent<{}>> {
    // tslint:disable-next-line:prefer-const
    let formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest(
      'POST',
      this.url_analitikaFileUplata,
      formData,
      {
        reportProgress: true,
        responseType: 'text'
      }
    );

    return this.http.request(req);
  }

  insertNalogZaUplatu(nalogzaUplatu: AnalitikaIzvoda): Observable<NovaUplata> {
    return this.http.post<AnalitikaIzvoda>(this.urlUplata, nalogzaUplatu, httpOptions).pipe(
      catchError(this.handleError<AnalitikaIzvoda>('insertNalogZaUplatu'))
    );
  }

  insertNalogZaIsplatu(nalogZaIsplatu: AnalitikaIzvoda): Observable<AnalitikaIzvoda> {
    return this.http.post<AnalitikaIzvoda>(this.urlIsplata, nalogZaIsplatu, httpOptions).pipe(
      catchError(this.handleError<AnalitikaIzvoda>('insertNalogZaIsplatu'))
    );
  }

  insertNalogZaPrenos(nalogZaPrenos: AnalitikaIzvoda, id: number): Observable<AnalitikaIzvoda> {
    return this.http.post<AnalitikaIzvoda>(this.urlPrenos + '/' + id , nalogZaPrenos, httpOptions).pipe(
      catchError(this.handleError<AnalitikaIzvoda>('insertNalogZaPrenos'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
