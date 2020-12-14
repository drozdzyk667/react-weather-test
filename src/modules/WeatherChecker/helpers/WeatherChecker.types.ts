export interface RequestWeatherCheckerDataParams {
  /** Optional determines value provided by a user */
  query?: string;
  /** Optional determines longitude based on geolocation */
  longitude?: number;
  /** Optional determines latitude based on geolocation */
  latitude?: number;
  lang: string;
  forecast: number;
  degree: string;
}

interface WeatherDescription {
  description: string;
  icon: string;
  id: string;
  main: string;
}

export interface WeatherDetails {
  dt: number;
  dt_text: string;
  main: {
    humidity: number;
    pressure: number;
    temp_max: number;
    temp_min: number;
  };
  weather: WeatherDescription[];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface WeatherCheckerDataFields {
  city: {
    cord: {
      lat: number;
      long: number;
    };
    country: string;
    id: number;
    name: string;
    sunrise: number;
    sunset: number;
  };
  list: WeatherDetails[];
}

export type NullOrUndefinedType = null | undefined;

export interface WeatherCheckerValues {
  weatherInput: string;
  degree: string;
}
