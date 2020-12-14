import React from 'react';

import { useTranslation } from 'react-i18next';
import { Icon } from 'components/Icon/Icon.component';
import { Icons } from 'components/Icon/helpers/Icon.constants';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  text: {
    padding: '0 0.5rem',
  },
});

interface ErrorInfoProps {
  message: string;
}

export const ErrorInfo: React.FC<ErrorInfoProps> = (props) => {
  const { message } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <Icon fontSize='small' color='error' name={Icons.errorIcon} />
      <Typography className={classes.text} variant='caption' color='error'>
        {t(message)}
      </Typography>
    </>
  );
};
