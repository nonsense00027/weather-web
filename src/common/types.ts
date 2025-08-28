export type WeatherType =
  | 1111 // Sunny
  | 1112 // Cloudy
  | 1003 // Partly cloudy
  | 1063 // Patchy rain nearby
  | 1150 // Patchy light drizzle
  | 1189 // Moderate rain
  | 1183
  | 1240 // Light rain
  | 1153
  | 1195 // Heavy rain
  | 1002; // Overcast

export type WeatherCondition = {
  text: string;
  icon: string;
  code: WeatherType;
};

export type ForecastDay = {
  date: string;
  astro: {
    sunrise: string;
    sunset: string;
  };
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    daily_chance_of_rain: number;
    condition: WeatherCondition;
    uv: number;
    avghumidity: number;
  };
};

export type CurrentForecast = {
  condition: WeatherCondition;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  feelslike_f: number;
  pressure_mb: number;
  vis_km: number;
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
