import React from 'react';
import { Box } from '@material-ui/core';
import { FormikRadioButton } from 'components/form/FormikRadioButton/FormikRadioButton.component';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';
import { useTranslation } from 'react-i18next';
import { WeatherCheckerViewOwnProps } from 'modules/WeatherChecker/WeatherCheckerView/WeatherCheckerView.component';

export const WeatherRadioGroup: React.FC<WeatherCheckerViewOwnProps> = (
  props
) => {
  const { onToggleDegrees, isLoading } = props;
  const { t } = useTranslation();

  return (
    <Box
      role='group'
      tabIndex={0}
      onChange={onToggleDegrees}
      data-testid='radio-group'
    >
      <FormikRadioButton
        name='degree'
        value={KeyTranslations.imperial}
        isLoading={isLoading}
        label={t(KeyTranslations.fahrenheit)}
      />
      <FormikRadioButton
        name='degree'
        value={KeyTranslations.metric}
        isLoading={isLoading}
        label={t(KeyTranslations.celsius)}
      />
      <FormikRadioButton
        name='degree'
        value={KeyTranslations.kelvin}
        isLoading={isLoading}
        label={t(KeyTranslations.kelvin)}
      />
    </Box>
  );
};
