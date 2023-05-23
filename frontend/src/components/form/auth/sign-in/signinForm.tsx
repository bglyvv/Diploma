import { Box, Button, Grid, IconButton, InputAdornment, InputLabel } from '@mui/material';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-mui';
import { useState } from 'react';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { SigninSchema } from './validationSchema';
import { useAuthDispatch } from 'context/auth/store';
import { useNotifications } from 'context/NotificationsContext';
import browserHistory from 'utils/browser-utils';
import { useTranslation } from 'react-i18next';
import { api } from 'api';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(7),
    '& .input-label': {
        color: theme.dark ? '#D6D6D6' : '#1f2a38',
    },
}));

export const SignInForm: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useAuthDispatch();
    const { notify } = useNotifications();

    const initialValues = {
        password: '',
        studentId: '',
    };

    const onSubmit = ({ ...formData }, { setSubmitting }): void => {
        api.post('/account/login', formData)
            .then((response) => {
                const accessToken = response.data.token;
                dispatch({ type: 'LOGGED_IN', accessToken });
                notify({
                    type: 'success',
                    message: t('loginSuccess'),
                });
                browserHistory.push('/d');
            })
            .catch((error) => {
                notify({
                    type: 'error',
                    message: t(error.response.data) || t('defaultErrorMessage'),
                });
                setSubmitting(false);
            });
    };

    const [visible, setVisible] = useState(false);

    const translatedSigninSchema = SigninSchema(t);

    return (
        <Root>
            <Grid container justifyContent="center">
                <Grid xs={10} sm={8} item>
                    <Formik initialValues={initialValues} validationSchema={translatedSigninSchema} onSubmit={onSubmit}>
                        {({ handleSubmit }): any => {
                            return (
                                <>
                                    <Grid item xs={12}>
                                        <Form onSubmit={handleSubmit}>
                                            <Grid container spacing={2}>
                                                <Grid item xs={12}>
                                                    <InputLabel className="input-label">{t('studentId')}</InputLabel>
                                                    <Field
                                                        component={TextField}
                                                        name="studentId"
                                                        margin="dense"
                                                        autoComplete="off"
                                                        autoFocus
                                                        inputProps={{
                                                            autoCapitalize: 'none',
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <InputLabel className="input-label">{t('password')}</InputLabel>
                                                    <Field
                                                        component={TextField}
                                                        name="password"
                                                        type={visible ? 'text' : 'password'}
                                                        autoComplete="current-password"
                                                        margin="dense"
                                                        InputProps={{
                                                            endAdornment: (
                                                                <InputAdornment position="end">
                                                                    <IconButton onClick={() => setVisible(!visible)}>
                                                                        {visible ? (
                                                                            <VisibilityOutlinedIcon
                                                                                fontSize="medium"
                                                                                sx={{ color: '#8EB2CB' }}
                                                                            />
                                                                        ) : (
                                                                            <VisibilityOffOutlinedIcon
                                                                                fontSize="medium"
                                                                                sx={{ color: '#8EB2CB' }}
                                                                            />
                                                                        )}
                                                                    </IconButton>
                                                                </InputAdornment>
                                                            ),
                                                        }}
                                                        inputProps={{
                                                            autoCapitalize: 'none',
                                                        }}
                                                    />
                                                </Grid>

                                                <Grid item xs={12}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        type="submit"
                                                        fullWidth
                                                        sx={{ mt: 1.5 }}
                                                    >
                                                        {t('signIn')}
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Form>
                                    </Grid>
                                </>
                            );
                        }}
                    </Formik>
                </Grid>
            </Grid>
        </Root>
    );
};
