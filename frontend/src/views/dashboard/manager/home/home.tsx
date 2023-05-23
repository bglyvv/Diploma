import { Box, Theme } from '@mui/material';
import { styled } from '@mui/styles';
import { Page } from 'components';
import { useTranslation } from 'react-i18next';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(6.25),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

export const Home: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Root>
            <Page title={t('home:pageTitle')}>
                <div></div>
            </Page>
        </Root>
    );
};
