import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NaseljenoMesto } from '../modeli/naseljeno-mesto';
import { NovoNaseljenoMesto } from '../modeli/novo-naseljeno-mesto';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Drzava } from '../modeli/drzava';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class NaseljenaMestaService {


  private url = 'http://localhost:8080/naseljenamesta';



  getNaseljenaMesta(): Observable<NaseljenoMesto[]> {
    return this.http.get<NaseljenoMesto[]>(this.url);

  }
  getNaseljenoMesto(id: string): Observable<NaseljenoMesto> {
    return this.http.get<NaseljenoMesto>(this.url + '/' + id);
  }

  insertNaseljenaMesta(nasm: NovoNaseljenoMesto): Observable<NovoNaseljenoMesto> {
    return this.http.post<NovoNaseljenoMesto>(this.url, nasm, httpOptions).pipe(
      catchError(this.handleError<NovoNaseljenoMesto>('insertNaseljenoMesto'))
    );
  }

  updateNaseljenoMesto(nasm: NaseljenoMesto): Observable<NaseljenoMesto> {
    const id = typeof nasm === 'string' ? nasm : nasm.id;
    const url = `${this.url}/${id}`;
    return this.http.put<NaseljenoMesto>(url, nasm, httpOptions).pipe(
      catchError(this.handleError<NaseljenoMesto>('updateNaseljenoMesto'))
    );
  }

  deleteNaseljenoMesto(nasm: NaseljenoMesto | string): Observable<NaseljenoMesto> {
    const id = typeof nasm === 'string' ? nasm : nasm.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<NaseljenoMesto>(url, httpOptions).pipe(
      catchError(this.handleError<NaseljenoMesto>('deleteNaseljenoMesto'))
    );
  }


  constructor(private http: HttpClient) { }


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
