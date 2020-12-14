import { WeatherDetails } from 'modules/WeatherChecker/helpers/WeatherChecker.types';

export const getCurrentWeatherIcon = (icon: string) => {
  return `http://openweathermap.org/img/wn/${icon}@4x.png`;
};

export const getForecastDaily = (arr: WeatherDetails[], nth: number) => {
  const filteredArray = arr.filter(
    (_element, index) => index % nth === nth - 1
  );

  return filteredArray;
};
