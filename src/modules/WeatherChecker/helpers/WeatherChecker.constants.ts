import dayjsPl from 'dayjs/locale/pl';
import dayjsEn from 'dayjs/locale/en';

export enum WeatherCheckerNames {
    weatherInput = 'weatherInput',
}

export const DAILY_FORECAST = 8
export const FORECAST_FOR_NUMBER_OF_DAYS = 26;
export const NUMBER_OF_QUERY_RETRY = 1
export const MIN_SCREEN_WIDTH = 450;
export const MID_SCREEN_WIDTH = 650;

export const DayJSMap = {
    pl: dayjsPl,
    'pl-PL': dayjsPl,
    en: dayjsEn,
    'en-EN': dayjsEn
} as const

export enum Degrees {
    'metric' = '°C',
    'imperial' = '°F',
    'kelvin' = 'K'
}
