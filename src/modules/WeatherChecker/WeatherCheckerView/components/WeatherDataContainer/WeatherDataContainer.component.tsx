import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { WeatherCheckerDataFields } from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';

import { useTranslation } from 'react-i18next';
import { CityHeader } from './components/CityHeader/CityHeader.component';
import { WeatherData } from './components/WeatherData/WeatherData.component';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  error: {
    padding: '2rem',
  },
});

export interface WeatherDataContainerOwnProps {
  isError: boolean;
  weatherForecast: WeatherCheckerDataFields;
}

export const WeatherDataContainer: React.FC<WeatherDataContainerOwnProps> = (
  props
) => {
  const { weatherForecast, isError } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  if (isError) {
    return (
      <Typography className={classes.error}>
        {t(KeyTranslations.fetchError)}
      </Typography>
    );
  }

  return (
    <Box className={classes.root}>
      <CityHeader
        cityName={weatherForecast?.city.name}
        sunrise={weatherForecast?.city.sunrise}
        sunset={weatherForecast?.city.sunset}
      />
      <WeatherData weathers={weatherForecast?.list} />
    </Box>
  );
};
