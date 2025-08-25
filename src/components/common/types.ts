export type WeatherType =
  | "sunny"
  | "cloudy"
  | "Partly cloudy"
  | "Patchy rain nearby"
  | "Moderate rain"
  | "Heavy rain";

export type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    daily_chance_of_rain: number;
    condition: {
      text: WeatherType;
    };
  };
};

export type CurrentForecast = {
  condition: {
    text: WeatherType;
  };
  last_updated: string;
  temp_c: number;
  temp_f: number;
};

export type Location = {
  name: string;
  region: string;
  country: string;
};

export interface DataResponse {
  current: CurrentForecast;
  forecast: {
    forecastday: ForecastDay[];
  };
  location: Location;
}
