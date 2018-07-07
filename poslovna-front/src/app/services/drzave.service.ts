import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Drzava } from '../modeli/drzava';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NovaDrzava } from '../modeli/nova-drzava';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DrzaveService {
  private url = 'http://localhost:8080/drzave';
  private url1 = 'http://localhost:8080/drzave/naseljenamesta';

  getDrzave(): Observable<Drzava[]> {
    return this.http.get<Drzava[]>(this.url);
  }
  getDrzava(id: string): Observable<Drzava> {
    return this.http.get<Drzava>(this.url + '/' + id);
  }

  insertDrzava(kategorija: NovaDrzava): Observable<NovaDrzava> {
    return this.http.post<NovaDrzava>(this.url, kategorija, httpOptions).pipe(
      catchError(this.handleError<NovaDrzava>('insertDrzava'))
    );
  }

  updateDrzava(kategorija: Drzava): Observable<Drzava> {
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url1}/${id}`;
    return this.http
      .put<Drzava>(url, kategorija, httpOptions)
      .pipe(catchError(this.handleError<Drzava>('updateDrzava')));
  }

  deleteDrzava(kategorija: Drzava | string): Observable<Drzava> {
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url1}/${id}`;

    return this.http
      .delete<Drzava>(url, httpOptions)
      .pipe(catchError(this.handleError<Drzava>('deleteDrzava')));
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
