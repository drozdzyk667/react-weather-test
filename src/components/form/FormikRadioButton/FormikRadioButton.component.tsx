import { FormControlLabel, Radio } from '@material-ui/core';
import { useField } from 'formik';
import React from 'react';

interface FormikRadioButton {
  name: string;
  value: string;
  label: string;
  isLoading: boolean;
}

export const FormikRadioButton: React.FC<FormikRadioButton> = (props) => {
  const { name, value, isLoading, label } = props;
  const [field] = useField({
    name: name,
    type: 'radio',
    value: value,
  });

  return (
    <FormControlLabel
      value={label}
      control={
        <Radio {...field} checked={field.checked} disabled={isLoading} />
      }
      label={label}
    />
  );
};
