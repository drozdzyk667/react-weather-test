import React from 'react';
import {
  WeatherCheckerValues,
  WeatherDetails,
} from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import {
  DAILY_FORECAST,
  Degrees,
} from 'modules/WeatherChecker/helpers/WeatherChecker.constants';
import {
  getCurrentWeatherIcon,
  getForecastDaily,
} from 'modules/WeatherChecker/utils/WeatherDataModifiers';
import cx from 'classnames';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';
import { useTranslation } from 'react-i18next';
import { getProperDailyFormat } from 'modules/WeatherChecker/utils/ProperDateFormats';
import { CardInfoBox } from 'components/CardInfoBox/CardInfoBox.component';
import { useFormikContext } from 'formik';

const useStyles = makeStyles({
  root: {
    padding: '2rem 0.5rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    width: '250px',
    margin: '0.6rem',
  },
  cardHeader: {
    textAlign: 'center',
    padding: 0,
    paddingTop: '1rem',
  },
  cardContent: {
    fontStyle: 'italic',
  },
  valuesContainer: {
    paddingTop: '1.5rem',
  },
  descriptionContainer: {
    width: '250px',
    paddingBottom: '2rem',
  },
});

interface WeatherData {
  weathers: WeatherDetails[];
}

export const WeatherData: React.FC<WeatherData> = (props) => {
  const { weathers } = props;
  const { t } = useTranslation();
  const classes = useStyles();
  const { values } = useFormikContext<WeatherCheckerValues>();

  const filteredForecastByDays = getForecastDaily(
    weathers ?? [],
    DAILY_FORECAST
  );

  return (
    <Box className={classes.root}>
      {filteredForecastByDays.map((element: WeatherDetails) => {
        const { weather, main, wind } = element;
        const { nameOfTheDay } = getProperDailyFormat(element.dt);
        const capitalNameOfTheDay =
          nameOfTheDay.charAt(0).toUpperCase() + nameOfTheDay.slice(1);

        return (
          <Card raised className={classes.card} key={element.dt}>
            <CardHeader
              className={classes.cardHeader}
              title={capitalNameOfTheDay}
            />
            <CardContent className={cx(classes.column, classes.cardContent)}>
              <Box
                boxShadow={3}
                className={cx(classes.column, classes.descriptionContainer)}
              >
                <img
                  src={getCurrentWeatherIcon(weather[0].icon)}
                  alt={t(KeyTranslations.weatherIcon)}
                />
                <Box>
                  <Typography variant='caption'>
                    {weather[0].description}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.valuesContainer}>
                <CardInfoBox
                  type={main.pressure}
                  kind={'hPa'}
                  label={t(KeyTranslations.pressure)}
                />
                <CardInfoBox
                  type={main.temp_min}
                  kind={Degrees[values.degree as keyof typeof Degrees]}
                  label={t(KeyTranslations.tempMin)}
                />
                <CardInfoBox
                  type={main.temp_max}
                  kind={Degrees[values.degree as keyof typeof Degrees]}
                  label={t(KeyTranslations.tempMax)}
                />
                <CardInfoBox
                  type={wind.speed}
                  kind={'m/s'}
                  label={t(KeyTranslations.windSpeed)}
                  isLast={true}
                />
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Box>
  );
};
