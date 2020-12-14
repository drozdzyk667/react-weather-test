import React from 'react';
import translation from './modules/WeatherChecker/translations/translations';
import { I18nextProvider as TranslationProvider } from 'react-i18next';
import { WeatherCheckerWrapper } from 'modules/WeatherChecker/WeatherCheckerWrapper/WeatherCheckerWrapper.component';
import { WeatherCheckerOverview } from 'modules/WeatherChecker/WeatherCheckerOverview/WeatherCheckerOverview.component';

export const App = () => {
  return (
    <TranslationProvider i18n={translation}>
      <WeatherCheckerWrapper>
        <WeatherCheckerOverview />
      </WeatherCheckerWrapper>
    </TranslationProvider>
  );
};
