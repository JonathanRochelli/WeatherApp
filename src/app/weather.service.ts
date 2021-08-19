import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Forecast } from './model/forecast';
import { Weather } from './model/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeather(city  : string) : Observable<Weather> {
    return this.http.get<Weather>(environment.apiUrl, { 
      params : new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('appId', environment.apiKey)
    })
  }

  getForecast(lat : number, long:number) : Observable<Forecast[]> {
    return  this.http.get<Forecast[]>("https://api.openweathermap.org/data/2.5/onecall", {
      params : new HttpParams()
        .set("lat", lat)
        .set('lon', long)
        .set('units', 'metric')
        .set('appid', environment.apiKey)
    }).pipe( map( (response : any) => { return response.daily }))
  }
}
