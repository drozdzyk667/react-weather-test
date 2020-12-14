import { Resource } from 'i18next';

export enum KeyTranslations {
  english = 'english',
  headerDescription = 'headerDescription',
  polish = 'polish',
  search = 'search',
  inputError = 'inputError',
  inputLabel = 'inputLabel',
  fetchError = 'fetchError',
  sunrise = 'sunrise',
  sunset = 'sunset',
  weatherIcon = 'weatherIcon',
  tempMin = 'tempMin',
  tempMax = 'tempMax',
  pressure = 'pressure',
  windSpeed = 'windSpeed',
  imperial = 'imperial',
  metric = 'metric',
  fahrenheit = 'fahrenheit',
  celsius = 'celsius',
  kelvin = 'kelvin'
}

type Fields =
  | KeyTranslations.english
  | KeyTranslations.headerDescription
  | KeyTranslations.polish
  | KeyTranslations.search
  | KeyTranslations.inputError
  | KeyTranslations.inputLabel
  | KeyTranslations.fetchError
  | KeyTranslations.sunrise
  | KeyTranslations.sunset
  | KeyTranslations.weatherIcon
  | KeyTranslations.tempMax
  | KeyTranslations.tempMin
  | KeyTranslations.pressure
  | KeyTranslations.windSpeed
  | KeyTranslations.imperial
  | KeyTranslations.metric
  | KeyTranslations.celsius
  | KeyTranslations.fahrenheit
  | KeyTranslations.kelvin;

export interface Translation extends Resource {
  [key: string]: {
    translations: { [key in Fields]: string };
  };
}
