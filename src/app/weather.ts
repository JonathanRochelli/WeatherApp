export interface Weather {
    name: string,
    main: {
        "temp": number,
        "pressure": number,
        "humidity": number
    },
    wind: {
        "speed": number,
    },
    sys: {
        "country": string
    },
    weather: WeatherInfo[]    
}

export interface WeatherInfo {
    main: string,
    icon: string
}
