import React from 'react';
import { Box, makeStyles, Typography, Divider } from '@material-ui/core';
import cx from 'classnames';

const useStyles = makeStyles({
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  valueContainer: {
    padding: '0.5rem 0',
  },
});

interface CardInfoBoxProps {
  type: number;
  kind: string;
  label: string;
  /** Optional determines last element from the group */
  isLast?: boolean;
}

export const CardInfoBox: React.FC<CardInfoBoxProps> = (props) => {
  const { type, kind, label, isLast } = props;
  const classes = useStyles();

  return (
    <>
      <Box className={cx(classes.column, classes.valueContainer)}>
        <Typography variant='subtitle1'>{label}</Typography>
        <Typography variant='h6'>{`${type} ${kind}`}</Typography>
      </Box>
      {!isLast && <Divider />}
    </>
  );
};
