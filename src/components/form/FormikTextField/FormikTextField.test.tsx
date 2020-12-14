import React from 'react';
import { mount } from 'enzyme';
import { I18nextProvider } from 'react-i18next';
import translation from 'modules/WeatherChecker/translations/translations';
import { Formik } from 'formik';
import { WeatherCheckerValues } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { weatherCheckerInitialValues } from 'modules/WeatherChecker/helpers/WeatherChecker.validation';
import { TextField } from '@material-ui/core';
import { FormikTextField } from './FormikTextField.component';
import { WeatherCheckerNames } from 'modules/WeatherChecker/helpers/WeatherChecker.constants';
import { Icon } from 'components/Icon/Icon.component';

describe('WeatherCheckerView', () => {
  const clickFnOnSubmit = jest.fn();

  const Comp = (
    <I18nextProvider i18n={translation}>
      <Formik<WeatherCheckerValues>
        onSubmit={clickFnOnSubmit}
        initialValues={weatherCheckerInitialValues}
      >
        <FormikTextField
          name={WeatherCheckerNames.weatherInput}
          isLoading={false}
          isSubmitting={false}
        />
      </Formik>
    </I18nextProvider>
  );

  it('renders <TextField/> with expected props', () => {
    const component = mount(Comp);
    expect(component.find(TextField).props().label).toEqual(
      'Please enter a city name'
    );
    expect(component.find(TextField).props().onChange).toBeDefined();
  });

  it('should render remove icon', () => {
    const component = mount(Comp);
    const icon = component.find(Icon).first();
    expect(icon.length).toBe(1);
  });
});
