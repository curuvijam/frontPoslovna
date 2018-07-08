import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Valuta } from '../modeli/valuta';
import { NovaValuta } from '../modeli/nova-valuta';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ValuteService {

  private url = 'http://localhost:8080/valute';


  getValute(): Observable<Valuta[]> {
    return this.http.get<Valuta[]>(this.url);
  }
  getValuta(id: string): Observable<Valuta> {
    return this.http.get<Valuta>(this.url + '/' + id);
  }

  insertValuta(kategorija: NovaValuta): Observable<NovaValuta> {
    return this.http.post<NovaValuta>(this.url, kategorija, httpOptions).pipe(
      catchError(this.handleError<NovaValuta>('insertValuta'))
    );
  }

  updateValuta(kategorija: Valuta): Observable<Valuta> {
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url}/${id}`;
    return this.http
      .put<Valuta>(url, kategorija, httpOptions)
      .pipe(catchError(this.handleError<Valuta>('updateValuta')));
  }

  deleteValuta(kategorija: Valuta | string): Observable<Valuta> {
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url}/${id}`;

    return this.http
      .delete<Valuta>(url, httpOptions)
      .pipe(catchError(this.handleError<Valuta>('deleteValuta')));
  }
  constructor(private http: HttpClient) {}

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
