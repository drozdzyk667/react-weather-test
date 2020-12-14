import { WeatherCheckerDataFields, WeatherDetails } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { CityHeaderProps } from 'modules/WeatherChecker/WeatherCheckerView/components/WeatherDataContainer/components/CityHeader/CityHeader.component';

export const WeatherDetailsMock: WeatherDetails[] = [
  {
    dt: 1607901997,
    dt_text: 'TEST_TEST',
    main: {
      humidity: 123,
      pressure: 1111,
      temp_max: 20,
      temp_min: 2,
    },
    weather: [
      {
        description: 'test_description',
        icon: 'test_icon',
        id: 'test_id',
        main: 'test_main',
      },
    ],
    wind: {
      deg: 143,
      speed: 32,
    },
  },
];

export const WeatherCheckerDataFieldsMock: WeatherCheckerDataFields = {
  city: {
    cord: {
      lat: 123,
      long: 123,
    },
    country: 'PL',
    id: 123,
    name: 'TEST',
    sunrise: 1607901997,
    sunset: 1607905997,
  },
  list: WeatherDetailsMock,
}

export const CityHeaderMock: CityHeaderProps = {
  cityName: 'TEST',
  sunrise: 1607901997,
  sunset: 1607905997
}