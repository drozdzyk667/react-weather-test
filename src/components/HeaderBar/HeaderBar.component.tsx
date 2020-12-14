import React from 'react';
import { makeStyles, Box, Typography } from '@material-ui/core';
import { teal, amber } from '@material-ui/core/colors';
import { useTranslation } from 'react-i18next';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';
import { Icons } from 'components/Icon/helpers/Icon.constants';
import { Icon } from 'components/Icon/Icon.component';
import { LangSelector } from 'components/LangSelector/LangSelector.component';

const useStyles = makeStyles({
  container: {
    padding: '0.6em',
    backgroundColor: teal[500],
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  langContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    color: amber[300],
  },
});

export const HeaderBar: React.FC = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.langContainer}>
        <LangSelector />
      </Box>
      <Box className={classes.descriptionContainer}>
        <Icon name={Icons.starRate} />
        <Typography className={classes.description} variant='subtitle1'>
          {t(KeyTranslations.headerDescription)}
        </Typography>
        <Icon name={Icons.starRate} />
      </Box>
    </Box>
  );
};
