import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import { HeaderBar } from 'components/HeaderBar/HeaderBar.component';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
  },
  footer: {
    width: '100%',
    paddingBottom: '0.5rem',
  },
});

export const WeatherCheckerWrapper: React.FC = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.footer}>
        <HeaderBar />
      </Box>
      {props.children}
    </Box>
  );
};
