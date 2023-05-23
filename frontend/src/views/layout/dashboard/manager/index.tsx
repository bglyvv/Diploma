import { styled } from '@mui/styles';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Sidebar } from './sidebar';
import ManagerRouter from 'routes/Dashboard/ManagerRouter';
import { LayoutProvider } from 'context/layout/store';
import { useLayout } from 'context/layout/store';
import { Header } from './header';
import { Theme } from '@mui/material/styles';
import { collapsedSidebarWidth, sidebarWidth, headerHeight } from './config';
import { useEffect, useState } from 'react';

const Root = styled('div')(
    ({ theme, managerSidebarCollapsed }: { theme: Theme; managerSidebarCollapsed: boolean }) => ({
        display: 'flex',
        height: '100%',
        width: '100%',
        '& .content': {
            width: '100%',
            height: '100%',
            transition: 'all .2s',
        },
        '& .page': {
            paddingTop: headerHeight + 24,
            paddingLeft: managerSidebarCollapsed ? collapsedSidebarWidth : sidebarWidth,
            marginBottom: theme.spacing(6),
            [theme.breakpoints.down('md')]: {
                paddingLeft: '0px !important',
            },
        },
    }),
);

const Content: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [{ managerSidebarCollapsed }, dispatch] = useLayout();
    const [collapsed, setCollapsed] = useState<boolean>(true);

    useEffect(() => {
        if (isMobile) {
            dispatch({ type: 'SET_MANAGER_SIDEBAR_COLLAPSED', collapsed: false });
            setCollapsed(true);
        }
    }, [isMobile]);

    const collapse = () => {
        if (isMobile) {
            setCollapsed((val) => !val);
        } else {
            dispatch({ type: 'SET_MANAGER_SIDEBAR_COLLAPSED', collapsed: !managerSidebarCollapsed });
        }
    };

    return (
        <Root managerSidebarCollapsed={managerSidebarCollapsed}>
            <Box sx={{ display: 'flex', width: '100%' }}>
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Box className="content">
                    <Header collapse={collapse} />
                    <Box className="page">
                        <ManagerRouter />
                    </Box>
                </Box>
            </Box>
        </Root>
    );
};

const CustomerDashboard: React.FC = () => {
    return (
        <LayoutProvider>
            <Content />
        </LayoutProvider>
    );
};

export default CustomerDashboard;
