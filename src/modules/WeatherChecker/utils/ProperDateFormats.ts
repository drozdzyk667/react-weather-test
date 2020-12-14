import dayjs from 'dayjs';
import i18n from 'modules/WeatherChecker/translations/translations';
import { DayJSMap } from 'modules/WeatherChecker/helpers/WeatherChecker.constants';

export const getProperHourlyFormat = (timestamp: number) => {
    return dayjs.unix(timestamp).format('HH:MM')
}

export const getProperDailyFormat = (timestamp: number) => {
    dayjs.locale(DayJSMap[i18n.language as keyof typeof DayJSMap])

    const nameOfTheDay = dayjs.unix(timestamp).format('dddd');
    return { nameOfTheDay }
}