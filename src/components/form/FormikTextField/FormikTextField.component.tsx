import React from 'react';
import { useField, useFormikContext } from 'formik';
import {
  TextField,
  Box,
  LinearProgress,
  makeStyles,
  InputAdornment,
} from '@material-ui/core';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';
import { ErrorInfo } from 'components/ErrorInfo/ErrorInfo.component';
import { useTranslation } from 'react-i18next';
import { Icon } from 'components/Icon/Icon.component';
import { Icons } from 'components/Icon/helpers/Icon.constants';

const useStyles = makeStyles({
  fieldContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  errorContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: '20px',
  },
  searchIcon: {
    cursor: 'pointer',
  },
});

interface FormikTextFieldProps {
  name: string;
  isSubmitting: boolean;
  isLoading: boolean;
}

export const FormikTextField: React.FC<FormikTextFieldProps> = (props) => {
  const { name, isSubmitting, isLoading } = props;
  const [field, meta, helpers] = useField(name);
  const { t } = useTranslation();
  const classes = useStyles();
  const { setSubmitting } = useFormikContext();

  React.useEffect(() => {
    setSubmitting(isLoading);
  }, [isLoading, setSubmitting]);

  const { error } = meta;

  const { setValue } = helpers;

  const handleOnChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value.replace(/[^a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/gi, ''));
    },
    [setValue]
  );

  const handleOnClearQuery = React.useCallback(() => {
    setValue('');
  }, [setValue]);

  return (
    <>
      <Box className={classes.fieldContainer}>
        <TextField
          {...field}
          value={field.value}
          name={name}
          onChange={handleOnChange}
          label={t(KeyTranslations.inputLabel)}
          variant='outlined'
          disabled={isSubmitting}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <Icon
                  name={Icons.clear}
                  className={classes.searchIcon}
                  onClick={handleOnClearQuery}
                />
              </InputAdornment>
            ),
          }}
        />
        {isSubmitting && <LinearProgress color='secondary' />}
      </Box>
      <Box className={classes.errorContainer}>
        {error && <ErrorInfo message={KeyTranslations.inputError} />}
      </Box>
    </>
  );
};
