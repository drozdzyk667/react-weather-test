import { RequestWeatherCheckerDataParams, WeatherCheckerDataFields, NullOrUndefinedType } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { weatherCheckerDataApi } from 'common/api/weatherChecker.api';

export enum WeatherCheckerDataQueryKeys {
    WeatherCheckerData = 'WeatherCheckerDataQueryKeys.WeatherCheckerData',
}

const hasResponseDataContent = (data: WeatherCheckerDataFields | NullOrUndefinedType):
data is WeatherCheckerDataFields => Boolean(data && Boolean(Object.entries(data).length));

export const requestWeatherCheckerData = async (_key: WeatherCheckerDataQueryKeys[],
    params: RequestWeatherCheckerDataParams): Promise<WeatherCheckerDataFields> => {
    const response = await fetch(
        weatherCheckerDataApi(params),
        {
            method: 'GET',
        },
    );

    if (!response.ok) {
        throw new Error('WeatherChecker data fetch error');
    }

    const responseWeatherCheckerData = await response.json() as WeatherCheckerDataFields;

    if (!hasResponseDataContent(responseWeatherCheckerData)) {
        throw new Error('Response data is empty');
    }

    return responseWeatherCheckerData;
};
