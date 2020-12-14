import React from 'react';
import { useFormik, FormikProvider, FormikProps } from 'formik';
import { useQuery } from 'react-query';
import {
  RequestWeatherCheckerDataParams,
  WeatherCheckerDataFields,
  WeatherCheckerValues,
} from 'modules/WeatherChecker/helpers/WeatherChecker.types';
import {
  weatherCheckerInitialValues,
  weatherCheckerSchema,
} from 'modules/WeatherChecker/helpers/WeatherChecker.validation';
import {
  requestWeatherCheckerData,
  WeatherCheckerDataQueryKeys,
} from 'modules/WeatherChecker/utils/WheatherCheckerData.util';
import { SnackBar } from 'components/SnackBar/SnackBar.component';
import { useTranslation } from 'react-i18next';
import { KeyTranslations } from 'modules/WeatherChecker/translations/helpers/translations.types';
import { useGeolocation } from 'modules/WeatherChecker/utils/useGeolocation.util';
import i18n from 'modules/WeatherChecker/translations/translations';
import { MAX_NUMBER_OF_LETTERS } from 'components/LangSelector/helpers/LangSelector.constants';
import { WeatherCheckerView } from 'modules/WeatherChecker/WeatherCheckerView/WeatherCheckerView.component';
import {
  FORECAST_FOR_NUMBER_OF_DAYS,
  NUMBER_OF_QUERY_RETRY,
} from 'modules/WeatherChecker/helpers/WeatherChecker.constants';

export const WeatherCheckerOverview: React.FC = () => {
  const { t } = useTranslation();
  const { latitude, longitude } = useGeolocation();
  const [isSent, setIsSent] = React.useState<boolean>(false);
  const [queryText, setQueryText] = React.useState<string>(
    weatherCheckerInitialValues.weatherInput
  );
  const [currentDegree, setCurrentDegree] = React.useState<string>(
    weatherCheckerInitialValues.degree
  );
  const detectedLangName = i18n.language.slice(0, MAX_NUMBER_OF_LETTERS);

  const params: RequestWeatherCheckerDataParams = {
    query: queryText,
    latitude,
    longitude,
    lang: detectedLangName,
    forecast: FORECAST_FOR_NUMBER_OF_DAYS,
    degree: currentDegree,
  };

  const { data, isError, isLoading, isSuccess } = useQuery(
    [WeatherCheckerDataQueryKeys.WeatherCheckerData, params],
    requestWeatherCheckerData,
    {
      refetchOnWindowFocus: false,
      retry: NUMBER_OF_QUERY_RETRY,
    }
  );

  const handleToggleDegrees = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCurrentDegree(event.target.value);
    },
    []
  );

  const handleInfoMessage = React.useCallback(() => {
    setIsSent(true);
  }, []);

  const handleCloseSnackBar = React.useCallback(() => {
    setIsSent(false);
  }, []);

  const formik: FormikProps<WeatherCheckerValues> = useFormik({
    initialValues: weatherCheckerInitialValues,
    onSubmit: () => {
      const { values, setSubmitting } = formik;
      setQueryText(values.weatherInput);
      setSubmitting(false);
    },
    validationSchema: weatherCheckerSchema,
    validateOnBlur: false,
    validateOnChange: false,
  });

  const hasValidCity = Boolean(queryText) ? queryText : data?.city.name ?? '';

  React.useEffect(() => {
    if (isError) {
      handleInfoMessage();
    }
    if (isSuccess) {
      window.localStorage.setItem('query', hasValidCity);
    }
  }, [isSuccess, hasValidCity, isError, handleInfoMessage]);

  return (
    <>
      <FormikProvider value={formik}>
        <WeatherCheckerView
          isError={isError}
          weatherForecast={data as WeatherCheckerDataFields}
          isLoading={isLoading}
          onToggleDegrees={handleToggleDegrees}
        />
      </FormikProvider>
      <SnackBar
        isOpen={isSent}
        onCloseSnackBar={handleCloseSnackBar}
        infoMessage={t(KeyTranslations.fetchError)}
        hasError
      />
    </>
  );
};
