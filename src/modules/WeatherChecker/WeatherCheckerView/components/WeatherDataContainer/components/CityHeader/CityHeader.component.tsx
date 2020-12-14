import React from 'react';
import { getProperHourlyFormat } from 'modules/WeatherChecker/utils/ProperDateFormats';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';

const useStyles = makeStyles({
  city: {
    padding: '0.5rem 0',
  },
  column: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  sunContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  sun: {
    padding: '0 0.5rem',
  },
});

export interface CityHeaderProps {
  cityName: string;
  sunset: number;
  sunrise: number;
}

export const CityHeader: React.FC<CityHeaderProps> = (props) => {
  const { cityName, sunset, sunrise } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Typography className={classes.city} variant='h4'>
        {cityName}
      </Typography>
      <Box>
        <Box className={classes.sunContainer}>
          <Box className={classes.column}>
            <Typography className={classes.sun}>
              {t(KeyTranslations.sunrise)}
            </Typography>
            <Typography className={classes.sun} variant='h5'>
              {getProperHourlyFormat(sunrise)}
            </Typography>
          </Box>
          <Box className={classes.column}>
            <Typography className={classes.sun}>
              {t(KeyTranslations.sunset)}
            </Typography>
            <Typography className={classes.sun} variant='h5'>
              {getProperHourlyFormat(sunset)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
