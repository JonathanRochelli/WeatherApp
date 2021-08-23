import { Component, OnInit } from '@angular/core';
import { Forecast } from '../model/forecast';
import { GeolocationService } from '../geolocation.service';
import { Point } from '../model/point';
import { Weather } from '../model/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather : Weather | undefined;
  forecasts : Forecast[] | undefined;
  date : Date = new Date();

  constructor (private weatherService : WeatherService, private geolocationService : GeolocationService) {}

  ngOnInit(){}

  search(city : string){
    this.getWeather(city);
    this.getForecast(city);
  }

  getWeather(city : string){
    this.weatherService.getWeather(city).subscribe((weather : Weather) => { this.weather = weather });
  }

  getForecast(city : string){
    this.geolocationService.getCoordinates(city).subscribe((point : Point) => {
      this.weatherService.getForecast(point.coordinates[1], point.coordinates[0]).subscribe((forecasts : Forecast[]) => { 
        forecasts.shift();
        this.forecasts = forecasts;
      });
    });
  }
}
