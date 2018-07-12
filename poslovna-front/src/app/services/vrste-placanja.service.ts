import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VrstePlacanja } from '../modeli/vrste-placanja';


@Injectable()
export class VrstePlacanjaService {

  private url = 'http://localhost:8080/vrsteplacanja';


  getValute(): Observable<VrstePlacanja[]> {
    return this.http.get<VrstePlacanja[]>(this.url);
  }
  getValuta(id: string): Observable<VrstePlacanja> {
    return this.http.get<VrstePlacanja>(this.url + '/' + id);
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
