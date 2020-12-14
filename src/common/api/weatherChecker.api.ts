import { RequestWeatherCheckerDataParams } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { basePrefixUrl } from './weatherChecker.constants';

export const weatherCheckerDataApi = (
  params: RequestWeatherCheckerDataParams
): string => {
  const { latitude, longitude, query, lang, forecast, degree } = params;
  
  if (Boolean(query)) {
    return `${basePrefixUrl}/data/2.5/forecast?q=${query}&cnt=${forecast}&lang=${lang}&units=${degree}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  } else {
    return `${basePrefixUrl}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&cnt=${forecast}&lang=${lang}&units=${degree}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
  }
};