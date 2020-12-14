import React from 'react';
import { mount } from 'enzyme';
import { WeatherData } from './WeatherData.component';
import { WeatherDetailsMock } from 'modules/WeatherChecker/testUtils/weatherData';
import { Box } from '@material-ui/core';
import { I18nextProvider } from 'react-i18next';
import translation from 'modules/WeatherChecker/translations/translations';
import { Formik } from 'formik';
import { WeatherCheckerValues } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { weatherCheckerInitialValues } from 'modules/WeatherChecker/helpers/WeatherChecker.validation';

describe('WeatherData', () => {
  const clickFnOnSubmit = jest.fn();
  const Comp = (
    <I18nextProvider i18n={translation}>
      <Formik<WeatherCheckerValues>
        onSubmit={clickFnOnSubmit}
        initialValues={weatherCheckerInitialValues}
      >
        <WeatherData weathers={WeatherDetailsMock} />
      </Formik>
    </I18nextProvider>
  );

  it('should find root element and render', () => {
    const component = mount(Comp);
    const root = component.findWhere((node) => node.is(Box));
    expect(root.length).toBe(1);
  });
});
