import { CssBaseline } from '@mui/material';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { LanguageMenu } from 'components';
import { ThemeSwitch } from 'components/theme-switch';
import AppRouter from 'routes/AppRouter';
import banm from 'assets/banm.png';

const Root = styled('div')(({ theme }: { theme: Theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    '& .main-wrapper': {
        display: 'flex',
        height: '100%',
        flex: '1 1 auto',
        paddingTop: '180px',
        backgroundColor: theme.dark ? '#212331' : '#F6F5F5',
    },
    '& .content': {
        width: '100%',
        flex: '1 1 auto',
    },
    '& .main': {
        paddingBottom: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        [theme.breakpoints.down('md')]: {
            minHeight: `100vh`,
        },
    },
    '& .language-menu': {
        position: 'absolute',
        right: '132px',
        top: '27px',
        [theme.breakpoints.down('md')]: {
            right: '70px',
        },
    },
    '& .theme-switch': {
        position: 'absolute',
        right: 60,
        top: 27,
        [theme.breakpoints.down('md')]: {
            right: '16px',
        },
    },
    '& .logo': {
        position: 'absolute',
        top: 15,
        left: 30,
    },
}));

const App: React.FC = () => {
    return (
        <Root>
            <CssBaseline />
            <div className="main-wrapper">
                <div className="content">
                    <div className="main">
                        <AppRouter />
                    </div>
                </div>
            </div>
            <LanguageMenu className="language-menu" />
            <ThemeSwitch />
            <img className="logo" src={banm} alt="Logo" />
        </Root>
    );
};

export default App;
