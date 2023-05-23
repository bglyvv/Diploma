import * as Yup from 'yup';

export const SigninSchema = (t) => {
    return Yup.object().shape({
        password: Yup.string().required(t('required')),
        studentId: Yup.string().required(t('required')),
    });
};
