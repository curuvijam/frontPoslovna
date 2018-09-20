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

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable()
export class AnalitikaService {
  private url_analitikaFile = 'http://localhost:8080/analitikaFile';
  private url_analitikaFileUplata = 'http://localhost:8080/analitikaFileUplata';
  private urlUplata = 'http://localhost:8080/analitikaUplata';
  private urlIsplata = 'http://localhost:8080/analitikaIsplata';

  constructor(private http: HttpClient) {}

  loadFromFile(file: File): Observable<HttpEvent<{}>> {
    // tslint:disable-next-line:prefer-const
    let formData: FormData = new FormData();

    formData.append('file', file);

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

  insertNalogZaUplatu(nalogzaUplatu: NovaUplata): Observable<NovaUplata> {
    return this.http
      .post<NovaUplata>(this.urlUplata, nalogzaUplatu, httpOptions)
      .pipe(catchError(this.handleError<NovaUplata>('insertNalogZaUplatu')));
  }

  insertNalogZaIsplatu(nalogZaIsplatu: NovaIsplata): Observable<NovaIsplata> {
    return this.http
      .post<NovaIsplata>(this.urlIsplata, nalogZaIsplatu, httpOptions)
      .pipe(catchError(this.handleError<NovaIsplata>('insertNalogZaIsplatu')));
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
