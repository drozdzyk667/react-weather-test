import React from 'react';
import { mount } from 'enzyme';
import { CityHeaderMock } from 'modules/WeatherChecker/testUtils/weatherData';
import { Typography } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';
import translation from 'modules/WeatherChecker/translations/translations';
import { Formik } from 'formik';
import { WeatherCheckerValues } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { weatherCheckerInitialValues } from 'modules/WeatherChecker/helpers/WeatherChecker.validation';
import { CityHeader } from './CityHeader.component';
import { getProperHourlyFormat } from 'modules/WeatherChecker/utils/ProperDateFormats';

describe('CityHeader', () => {
  const clickFnOnSubmit = jest.fn();
  const Comp = (
    <I18nextProvider i18n={translation}>
      <Formik<WeatherCheckerValues>
        onSubmit={clickFnOnSubmit}
        initialValues={weatherCheckerInitialValues}
      >
        <CityHeader
          cityName={CityHeaderMock.cityName}
          sunrise={CityHeaderMock.sunrise}
          sunset={CityHeaderMock.sunset}
        />
      </Formik>
    </I18nextProvider>
  );

  it('should find all Typography elements', () => {
    const component = mount(Comp);
    const element = component.findWhere((node) => node.is(Typography));
    expect(element.length).toBe(5);
  });

  it('should check cityName', () => {
    const component = mount(Comp);
    expect(component.find(Typography).at(0).text()).toEqual(
      CityHeaderMock.cityName
    );
  });

  it('should check sunrise text', () => {
    const component = mount(Comp);
    expect(component.find(Typography).at(1).text()).toEqual('Sunrise');
  });

  it('should check sunrise/sunset format', () => {
    const component = mount(Comp);
    expect(component.find(Typography).at(2).text()).toEqual(
      getProperHourlyFormat(CityHeaderMock.sunrise)
    );

    expect(component.find(Typography).at(4).text()).toEqual(
      getProperHourlyFormat(CityHeaderMock.sunset)
    );
  });

  it('should check sunset text', () => {
    const component = mount(Comp);
    expect(component.find(Typography).at(3).text()).toEqual('Sunset');
  });
});
