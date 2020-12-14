import * as React from 'react';
import { makeStyles, Grid, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: '1rem',
  },
});

interface LoaderProps {
  isLoading: boolean;
  size?: number | string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { isLoading, size, children } = props;
  const classes = useStyles();

  const content = isLoading ? (
    <Grid
      className={classes.root}
      container={true}
      alignItems='center'
      justify='center'
    >
      <CircularProgress size={size} data-testid='loader' />
    </Grid>
  ) : (
    children
  );

  return <div className={classes.root}>{content}</div>;
};
