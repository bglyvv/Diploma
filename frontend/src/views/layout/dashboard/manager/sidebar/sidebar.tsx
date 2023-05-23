import { Box, useTheme, Drawer as MuiDrawer, useMediaQuery } from '@mui/material';
import { styled } from '@mui/styles';
import { MenuList } from './menu-list';
import { Theme } from '@mui/material/styles';
import { useLayout } from 'context/layout/store';
import { collapsedSidebarWidth, sidebarWidth } from '../config';
import { Link } from 'components';
import { logo } from 'config';

const Root = styled(Box)(() => ({
    position: 'fixed',
    height: `calc(var(--vh, 1vh) * 100)`,
    display: 'flex',
    zIndex: 11,
}));

const Drawer = styled(MuiDrawer)(
    ({
        theme,
        managerSidebarCollapsed,
        isMobile,
    }: {
        theme: Theme;
        managerSidebarCollapsed: boolean;
        isMobile: boolean;
    }) => ({
        width: !isMobile && managerSidebarCollapsed ? collapsedSidebarWidth : sidebarWidth,
        '& .MuiDrawer-paper': {
            transition: isMobile ? 'none' : 'all .2s',
            borderRight: 'none',
            width: !isMobile && managerSidebarCollapsed ? collapsedSidebarWidth : sidebarWidth,
        },
        '& .dashboard-menu': {
            '&::-webkit-scrollbar': {
                width: '0.3em',
                height: '0.1em',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '8px',
                backgroundColor: '#8DEEA2',
            },
            backgroundColor: theme.dark ? '#1E1D2B' : '#F6F5F5',
            minHeight: '100vh',
            overflowY: 'auto',
            overflowX: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            '& .logo': {
                width: 'auto',
                marginTop: theme.spacing(4.5),
                marginBottom: theme.spacing(8),
                display: 'flex',
                justifyContent: 'center',
                '& img': {
                    width: '90px',
                },
            },
        },
    }),
);

export const Sidebar: React.FC<{ collapsed: boolean; setCollapsed }> = ({ collapsed, setCollapsed }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [{ managerSidebarCollapsed }] = useLayout();

    return (
        <Root>
            <Drawer
                variant={isMobile ? undefined : 'permanent'}
                anchor="left"
                open={isMobile ? !collapsed : !managerSidebarCollapsed}
                onClose={() => isMobile && setCollapsed(true)}
                managerSidebarCollapsed={managerSidebarCollapsed}
                isMobile={isMobile}
            >
                <Box className="dashboard-menu">
                    <Link to="/d" className="logo">
                        <img src={logo} alt="logo" />
                    </Link>

                    <MenuList />
                </Box>
            </Drawer>
        </Root>
    );
};
