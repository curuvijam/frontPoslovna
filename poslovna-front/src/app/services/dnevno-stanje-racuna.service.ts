import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DnevnoStanjeRacuna } from '../modeli/dnevno-stanje-racuna';
import { catchError, map, tap } from 'rxjs/operators';
import { NovoDnevnoStanjeRacuna } from '../modeli/novo-dnevno-stanje-racuna';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class DnevnoStanjeRacunaService {
  private url = 'http://localhost:8080/dnevnostanjeracuna';


  getDnevnaStanjaRacuna(): Observable<DnevnoStanjeRacuna[]> {
    return this.http.get<DnevnoStanjeRacuna[]>(this.url);
  }
  getDnevnoStanejRacuna(id: string): Observable<DnevnoStanjeRacuna> {
    return this.http.get<DnevnoStanjeRacuna>(this.url + '/' + id);
  }

  insertDnevnoStanjeRacuna(kategorija: NovoDnevnoStanjeRacuna): Observable<NovoDnevnoStanjeRacuna> {
    return this.http.post<NovoDnevnoStanjeRacuna>(this.url, kategorija, httpOptions).pipe(
      catchError(this.handleError<NovoDnevnoStanjeRacuna>('insertStanje'))
    );
  }

  updateDnevnoStanjeRacuna(kategorija: DnevnoStanjeRacuna): Observable<DnevnoStanjeRacuna> {
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url}/${id}`;
    return this.http
      .put<DnevnoStanjeRacuna>(url, kategorija, httpOptions)
      .pipe(catchError(this.handleError<DnevnoStanjeRacuna>('updateStanje')));
  }

  deleteDnevnoStanjeRacuna(kategorija: DnevnoStanjeRacuna | string): Observable<DnevnoStanjeRacuna> {
    const id = typeof kategorija === 'string' ? kategorija : kategorija.id;
    const url = `${this.url}/${id}`;

    return this.http
      .delete<DnevnoStanjeRacuna>(url, httpOptions)
      .pipe(catchError(this.handleError<DnevnoStanjeRacuna>('deleteStanje')));
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
