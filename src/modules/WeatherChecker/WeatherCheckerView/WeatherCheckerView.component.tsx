import React from 'react';
import { FormikTextField } from 'components/form/FormikTextField/FormikTextField.component';
import { Form, useFormikContext } from 'formik';
import { WeatherCheckerNames } from 'modules/WeatherChecker/helpers/WeatherChecker.constants';
import { SubmitButton } from 'components/form/SubmitButton/SubmitButton.components';
import {
  WeatherDataContainer,
  WeatherDataContainerOwnProps,
} from './components/WeatherDataContainer/WeatherDataContainer.component';
import { Box, makeStyles } from '@material-ui/core';
import { Loader } from 'components/Loader/Loader';
import { WeatherRadioGroup } from './components/WeatherRadioGroup/WeatherRadioGroup.component';

const useStyles = makeStyles({
  searchContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '3rem 2rem 1rem 2rem',
  },
});

export interface WeatherCheckerViewOwnProps {
  onToggleDegrees: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

type WeatherCheckerViewProps = WeatherCheckerViewOwnProps &
  WeatherDataContainerOwnProps;

export const WeatherCheckerView: React.FC<WeatherCheckerViewProps> = (
  props
) => {
  const classes = useStyles();
  const { isLoading, weatherForecast, isError, onToggleDegrees } = props;
  const { handleSubmit, isSubmitting } = useFormikContext();

  return (
    <Form onSubmit={handleSubmit}>
      <Box className={classes.searchContainer} boxShadow={3}>
        <FormikTextField
          name={WeatherCheckerNames.weatherInput}
          isLoading={isLoading}
          isSubmitting={isSubmitting}
        />
        <WeatherRadioGroup
          isLoading={isLoading}
          onToggleDegrees={onToggleDegrees}
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </Box>
      <Loader isLoading={isLoading}>
        <WeatherDataContainer
          isError={isError}
          weatherForecast={weatherForecast}
        />
      </Loader>
    </Form>
  );
};
