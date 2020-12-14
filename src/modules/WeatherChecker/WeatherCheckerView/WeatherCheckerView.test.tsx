import React from 'react';
import { mount } from 'enzyme';
import { WeatherCheckerDataFieldsMock } from 'modules/WeatherChecker/testUtils/weatherData';
import { I18nextProvider } from 'react-i18next';
import translation from 'modules/WeatherChecker/translations/translations';
import { Form, Formik } from 'formik';
import { WeatherCheckerValues } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { weatherCheckerInitialValues } from 'modules/WeatherChecker/helpers/WeatherChecker.validation';
import { WeatherCheckerView } from './WeatherCheckerView.component';
import { FormikRadioButton } from 'components/form/FormikRadioButton/FormikRadioButton.component';

describe('WeatherCheckerView', () => {
  const clickFnOnSubmit = jest.fn();
  const clickFnToggleDegrees = jest.fn();

  const Comp = (
    <I18nextProvider i18n={translation}>
      <Formik<WeatherCheckerValues>
        onSubmit={clickFnOnSubmit}
        initialValues={weatherCheckerInitialValues}
      >
        <WeatherCheckerView
          isError={false}
          weatherForecast={WeatherCheckerDataFieldsMock}
          isLoading={false}
          onToggleDegrees={clickFnToggleDegrees}
        />
      </Formik>
    </I18nextProvider>
  );

  it('should find Form', () => {
    const component = mount(Comp);
    const element = component.findWhere((node) => node.is(Form));
    expect(element.length).toBe(1);
  });

  it('should find FormikRadioButton and its amount', () => {
    const component = mount(Comp);
    const element = component.findWhere((node) => node.is(FormikRadioButton));
    expect(element.length).toBe(3);
  });

  it('should render radio group container', () => {
    const component = mount(Comp);
    const group = component
      .find({
        'data-testid': 'radio-group',
      })
      .first();
    expect(group.length).toBe(1);
  });
});
