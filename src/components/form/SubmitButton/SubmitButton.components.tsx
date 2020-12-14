import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';

const useStyles = makeStyles({
  button: {
    width: '20vw',
    minWidth: '200px',
    margin: '1rem 0',
  },
});

interface SubmitButtonProps {
  isSubmitting: boolean;
}

export const SubmitButton: React.FC<SubmitButtonProps> = (props) => {
  const { isSubmitting } = props;
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Button
      className={classes.button}
      size='large'
      type='submit'
      variant='contained'
      color='primary'
      disabled={isSubmitting}
    >
      {t(KeyTranslations.search)}
    </Button>
  );
};
