import { Box, Hidden, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/styles';
import { useLayout } from 'context/layout/store';
import { collapsedSidebarWidth, headerHeight, sidebarWidth } from './../config';
import { HeaderProfile } from './header-profile';
import { ReactComponent as MenuIcon } from 'assets/icons/dashboard/menu.svg';
import { HeaderNotifications } from './header-notifications';
import { LanguageMenu } from 'components';
import { useTranslation } from 'react-i18next';
import { ThemeSwitch } from 'components/theme-switch';
// import { useAuth } from 'context/auth/store';

const Root = styled(Box)(
    ({
        theme,
        managerSidebarCollapsed,
        isMobile,
    }: {
        theme: Theme;
        managerSidebarCollapsed: boolean;
        isMobile: boolean;
    }) => ({
        height: headerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        paddingLeft: isMobile
            ? theme.spacing(2)
            : managerSidebarCollapsed
            ? collapsedSidebarWidth + 40
            : sidebarWidth + 40,
        paddingRight: isMobile ? theme.spacing(2) : theme.spacing(6.25),
        width: '100%',
        backgroundColor: theme.palette.background.default,
        zIndex: 10,
        transition: 'all .2s',
        '& .header-actions': {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
        },
        '& .profile-icon-box': {
            minWidth: 40,
            minHeight: 40,
            borderRadius: theme.spacing(1.25),
            backgroundColor: 'rgba(59, 67, 242, 0.1)',
        },
        '& .welcome-text': {
            color: theme.dark ? '#CFCFCF' : '#131927',
            fontWeight: 700,
            fontSize: '26px',
        },
        '& .description-text': {
            color: theme.dark ? '#838383' : '#131927',
        },
    }),
);

export const Header: React.FC<{ collapse: () => void }> = ({ collapse }) => {
    const { t } = useTranslation();
    const [{ managerSidebarCollapsed }] = useLayout();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // const [{ user }] = useAuth();

    return (
        <Root managerSidebarCollapsed={managerSidebarCollapsed} isMobile={isMobile}>
            <Box>
                <Hidden mdDown>
                    <Typography variant="body1" className="welcome-text">
                        {t('welcome')}, Kanan Bagaliyev
                    </Typography>
                    <Typography variant="body2" className="description-text">
                        Here’s an overview of your lessons’ attendance
                    </Typography>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={collapse}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Box>

            <Box className="header-actions">
                <HeaderNotifications />
                <LanguageMenu />
                <ThemeSwitch />
                <HeaderProfile />
            </Box>
        </Root>
    );
};
