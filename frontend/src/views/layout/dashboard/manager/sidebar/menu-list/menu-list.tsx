import { List } from '@mui/material';
import { useLayout } from 'context/layout/store';
import { MenuItem } from './menu-item';
import { ReactComponent as HomeIcon } from 'assets/icons/dashboard/home.svg';
import { ReactComponent as BookIcon } from 'assets/icons/dashboard/book.svg';
import { hasPermission } from 'ui-services/permission.ui-service';

export type MenuItemChildren = {
    name: string;
    route: string;
    permission?: string;
    icon?: React.ReactNode;
};

export type MenuItemAdmin = {
    name: string;
    icon: React.ReactNode;
    route?: string;
    permission?: string;
    badge?: number | null;
    children?: MenuItemChildren[];
};

export const MenuList: React.FC = () => {
    const [{ managerSidebarCollapsed }] = useLayout();

    const menuItems: MenuItemAdmin[] = [
        {
            name: 'homePage',
            icon: <HomeIcon />,
            route: '/d',
        },
        {
            name: 'economics',
            icon: <BookIcon />,
            route: '/d/attendance/1',
        },
    ];

    return (
        <List sx={{ padding: '0 24px' }}>
            {menuItems
                .filter((m) => (m.permission ? hasPermission(m.permission) : true))
                .map((menuItem, i) => (
                    <MenuItem key={i} menuItem={menuItem} managerSidebarCollapsed={managerSidebarCollapsed} />
                ))}
        </List>
    );
};
