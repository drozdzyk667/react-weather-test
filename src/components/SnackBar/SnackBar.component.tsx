import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Snackbar, SnackbarContent, Box } from '@material-ui/core';
import cx from 'classnames';
import { useWindowProperties } from 'modules/WeatherChecker/utils/useWindowProperties.util';

const useStyles = makeStyles((theme) => ({
  success: { backgroundColor: theme.palette.success.light },
  error: { backgroundColor: theme.palette.error.light },
  snackMobile: {
    marginBottom: '60px',
  },
  snackDesktop: {
    marginBottom: '20px',
  },
}));

interface SnackBarProps {
  isOpen: boolean;
  hasError: boolean;
  infoMessage: string;
  onCloseSnackBar: () => void;
}

const HIDE_DURATION = 4000;

export const SnackBar: React.FC<SnackBarProps> = (props) => {
  const {
    isOpen,
    onCloseSnackBar: handleCloseSnackBar,
    hasError,
    infoMessage,
  } = props;
  const classes = useStyles();
  const { isScreenMobile } = useWindowProperties();

  return (
    <Box>
      <Snackbar
        className={cx({
          [classes.snackMobile]: isScreenMobile,
          [classes.snackDesktop]: !isScreenMobile,
        })}
        open={isOpen}
        onClose={handleCloseSnackBar}
        autoHideDuration={HIDE_DURATION}
        transitionDuration={{ exit: 0 }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <SnackbarContent
          className={cx(classes.success, {
            [classes.error]: hasError,
          })}
          message={infoMessage}
        />
      </Snackbar>
    </Box>
  );
};
