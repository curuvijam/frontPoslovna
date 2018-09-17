import { Observable } from 'rxjs/Observable';
import {
  HttpHeaders,
  HttpClient,
  HttpEvent,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable()
export class AnalitikaService {
  private url_analitikaFile = 'http://localhost:8080/analitikaFile';

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
}
