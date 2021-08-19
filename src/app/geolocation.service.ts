import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { Point } from './model/point';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(private http : HttpClient) { }

  getCoordinates(city  : string) : Observable<Point> {
    return this.http.get<Point>("https://api-adresse.data.gouv.fr/search", { 
      params : new HttpParams()
        .set('q', city)
    }).pipe( map( (response : any) => { return  response.features[0].geometry }))
  }
}
