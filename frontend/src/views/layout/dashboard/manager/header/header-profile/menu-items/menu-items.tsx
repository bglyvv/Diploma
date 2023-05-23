import { Link } from 'components';
import { Button } from '@mui/material';
import { ReactComponent as SettingsIcon } from 'assets/icons/dashboard/settings.svg';
import { useTranslation } from 'react-i18next';

export type MenuItem = {
    name: string;
    icon: React.ReactNode;
    route: string;
};

export const menuItems: MenuItem[] = [
    {
        name: 'settings',
        icon: <SettingsIcon />,
        route: '/d/settings',
    },
];
export const MenuItems: React.FC<{ handleClose: () => void }> = ({ handleClose }) => {
    const { t } = useTranslation();
    return (
        <>
            {menuItems.map((menuItem, index) => {
                return (
                    <Link to={menuItem.route} key={index}>
                        <Button startIcon={menuItem.icon} className="menu-item" onClick={handleClose}>
                            {t(`header:${menuItem.name}`)}
                        </Button>
                    </Link>
                );
            })}
        </>
    );
};
