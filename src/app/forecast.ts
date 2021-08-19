import { WeatherInfo } from "./weather";

export interface Forecast {
    dt: number,
    pressure: number,
    humidity: number,
    temp: {
        "day": number,
        "min": number,
        "max": number
    },
    wind_speed:number,
    weather: WeatherInfo[]    
}