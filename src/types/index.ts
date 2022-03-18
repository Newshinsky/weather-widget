
export type CurrentInfoType = {
    icon: string 
    temp: number 
    humidity: number 
    windSpend: number
    windDirection: number 
}

export type FeelLikeDaylyType = {
    day: number
    eve: number
    morn: number
    night: number
}

export type TempDayilyType = {
    day: number
    eve: number
    max: number
    min: number
    morn: number
    night: number
}

export type CurrentWeatherDataType = {
    description: string
    icon: string
    id: number
    main: string
}

export type CurrentDataType = {
    clouds: number
    dew_point: number
    dt: number
    feels_like: number
    humidity: number
    pressure: number
    sunrise: number
    sunset: number
    temp: number
    uvi: number
    visibility: number
    weather: CurrentWeatherDataType[]
    wind_deg: number
    wind_gust: number
    wind_speed: number
}

export type DailyDataType = {
    clouds: number
    dew_point: number
    dt: number
    feels_like: FeelLikeDaylyType
    humidity: number
    moon_phase: number
    moonrise: number
    moonset: number
    pop: number
    pressure: number
    sunrise: number
    sunset: number
    temp: TempDayilyType
    uvi: number
    weather: CurrentWeatherDataType[]
    wind_deg: number
    wind_gust: number
    wind_speed: number
}

export type WeatherDataType = {
    aqi: number
    country: string
    current: CurrentDataType
    daily: DailyDataType[]
    lat: number
    lon: number
    name: "string"
}
export type WeatherReducerType = {
    weatherData: WeatherDataType
    isLoading: boolean,
    errors: null | string
}
