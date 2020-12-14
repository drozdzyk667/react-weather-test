import * as Yup from 'yup';

export const weatherCheckerSchema = Yup.object({
    weatherInput: Yup.string().required().min(3).max(20),
});

export const weatherCheckerInitialValues = {
    weatherInput: window.localStorage.getItem('query') ?? '',
    degree: 'metric'
};
