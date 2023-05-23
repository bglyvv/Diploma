import { Box, Card, Container, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/styles';
import { Page } from 'components';
import { SignInForm } from 'components/form/auth/sign-in/signinForm';
import { useTranslation } from 'react-i18next';

const Root = styled(Container)(({ theme }: { theme: Theme }) => ({
    marginBottom: theme.spacing(3),
    maxWidth: '660px',
    padding: 0,
    '& .card-wrapper': {
        padding: theme.spacing(7, 0),
        borderRadius: '32px',
        backgroundColor: theme.dark ? '#1E1D2A' : '#fff',
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(2),
        },
    },
    '& .title': {
        color: theme.dark ? '#D6D6D6' : '#36566D',
        textAlign: 'center',
    },
    '& .paper': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 105px',
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 6),
        },
    },
    '& .subTitle': {
        textAlign: 'center',
        paddingTop: '12px',
        fontSize: '14px',
        color: theme.dark ? '#ACACAC' : theme.palette.text.secondary,
    },
}));

export const SignInPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Page title={t('login')}>
            <Root>
                <Card className="card-wrapper">
                    <Box className="paper">
                        <Typography variant="h2" className="title">
                            {t('welcome')}!
                        </Typography>
                        <Typography className="subTitle">{t('systemEntrance')}</Typography>
                    </Box>

                    <SignInForm />
                </Card>
            </Root>
        </Page>
    );
};
