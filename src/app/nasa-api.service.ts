import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';

import { Observable } from 'rxjs';
import { take, catchError } from 'rxjs/operators'

import { Apod } from './models/apod.model';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiUrl: string = environment.apiUrl;
  private token: string = environment.token;

  private params: HttpParams = new HttpParams().set('api_key', this.token);

  constructor(private http: HttpClient) { }

  public getAsteroids(range: { start: string, end: string }): Observable<object> {
    const url: string = `${this.apiUrl}/neo/rest/v1/feed`;
    const requestParams: HttpParams = this.params
      .set('start_date', range.start)
      .set('end_date', range.end);

    return this.http.get<object>(url, { params: requestParams }).pipe(
      take(1),
      catchError(error => {
        throw new Error(error);
      })
    );

  }

  public getPictureOfTheDay(date: string): Observable<Apod> {
    const url: string = `${this.apiUrl}/planetary/apod`
    const requestParams: HttpParams = this.params.set('date', date);

    return this.http.get<Apod>(url, { params: requestParams }).pipe(
      take(1),
      catchError(error => {
        throw new Error(error);
      })
    );
  }

}
