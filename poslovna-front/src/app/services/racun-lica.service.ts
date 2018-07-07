import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { RacunLica } from '../modeli/racunLica';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { NaseljenoMesto } from '../modeli/naseljeno-mesto';
import { NovoNaseljenoMesto } from '../modeli/novo-naseljeno-mesto';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpBackend } from '@angular/common/http/src/backend';
import { NovRacunLica } from '../modeli/nov-racunLica';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RacunLicaService {

  private url = 'http://localhost:8080/racuni';

  getRacuni(): Observable<RacunLica[]> {
    return this.http.get<RacunLica[]>(this.url);
  }

  getRacun(id: string): Observable<RacunLica>{
    return this.http.get<RacunLica>(this.url + '/' + id)
  }

  insertRacun(kategorija: NovRacunLica): Observable<NovRacunLica>{
    return this.http.post<NovRacunLica>(this.url, kategorija, httpOptions).pipe(
      catchError(this.handleError<NovRacunLica>('insertRacun'))
    )
  }

  updateRacun(kategorija: RacunLica): Observable<RacunLica>{
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url}/${id}`;

    return this.http.put<RacunLica>(url, kategorija, httpOptions).pipe(catchError(this.handleError<RacunLica>('updateRacun')))
  }

  deleteRacun(racun: RacunLica | string):Observable<RacunLica>{
    const id = typeof racun === 'string' ? racun : racun.id;
    const url = `${this.url}/${id}`;

    return this.http.delete<RacunLica>(url, httpOptions).pipe(catchError(this.handleError<RacunLica>('deleteRacun')))
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
