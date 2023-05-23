import { Badge, Box, Collapse, IconButton, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/styles';
import clsx from 'clsx';
import { Link } from 'components';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/dashboard/sidebar-collapse.svg';
import { useState } from 'react';

const Root = styled(Box)(({ theme, collapsedChildren }: { theme: Theme; collapsedChildren: boolean }) => ({
    '& .list-item': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        cursor: 'pointer',
        transition: 'all .2s',
        padding: '16px 24px',
        borderRadius: '12px',
        marginBottom: theme.spacing(1),
        '&:hover:not(.selected)': {
            backgroundColor: theme.dark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(247,92,77,0.7)',
            '& .list-item-name': {
                color: '#fff',
            },
            '& svg path': {
                stroke: '#fff',
            },
        },
        '& .MuiIconButton-root': {
            padding: 0,
        },
    },

    '& .list-item-content': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .list-item-name': {
        color: theme.dark ? '#868686' : '#6D727F',
        fontWeight: 500,
        transition: 'all .2s',
    },
    '& .list-item-icon': {
        transition: 'all .2s',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: theme.spacing(1.5),
        '& svg path': {
            transition: 'all .2s',
            stroke: theme.dark ? '#868686' : '#6D727F',
        },
    },
    '& .selected': {
        backgroundColor: theme.dark ? '#212331' : '#F75C4D',
        '& .list-item-name': {
            color: '#fff',
            fontWeight: 600,
        },
        '& .list-item-icon svg path': {
            stroke: '#fff',
        },
    },
    '& .arrow-down-icon': {
        transition: 'all .2s',
        transform: collapsedChildren ? 'rotate(0deg)' : 'rotate(180deg)',
    },
    '& .menu-list-child': {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(1, 1.75),
        borderRadius: '8px',
        transition: 'all .2s',
        '& p': {
            color: '#DDE6ED',
            fontWeight: 500,
            fontSize: '14px',
            transition: 'all .2s',
        },
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
    },
    '& .selected-child': {
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
            backgroundColor: '#AAF9BB',
        },
        '& p': {
            color: theme.palette.primary.main,
            fontWeight: 600,
        },
    },
    '& .MuiCollapse-root': {
        paddingLeft: theme.spacing(5.75),
        paddingRight: theme.spacing(2),
        marginBottom: !collapsedChildren ? theme.spacing(1) : 0,
    },
}));

type MenuItemComponentProps = {
    menuItem: any;
    managerSidebarCollapsed: boolean;
};

export const MenuItem: React.FC<MenuItemComponentProps> = ({ menuItem }) => {
    const { t } = useTranslation();

    const isSelected = (item) => {
        return [item.route].some((route) => window.location.pathname === route);
    };
    const isSelectedChild = (child) => {
        return [child.route].some((route) => window.location.pathname.includes(route));
    };

    const [collapsedChildren, setCollapsedChildren] = useState(true);

    const Content = () => (
        <Box className={clsx(isSelected(menuItem) && 'selected', 'list-item')}>
            <Box className="list-item-content">
                <>
                    <Badge
                        variant="standard"
                        badgeContent={menuItem.badge}
                        color="error"
                        style={{ left: '54px', bottom: '16px' }}
                    />
                    <Box className="list-item-icon">{menuItem.icon}</Box>
                    <Typography className="list-item-name">{t(`sidebar:${menuItem.name}`)}</Typography>
                </>
            </Box>
            {menuItem.children && (
                <IconButton className="arrow-down-icon">
                    <ArrowDownIcon />
                </IconButton>
            )}
        </Box>
    );

    return (
        <Root collapsedChildren={collapsedChildren}>
            {menuItem.route ? (
                <Link to={menuItem.route}>
                    <Content />
                </Link>
            ) : (
                <>
                    <Box
                        onClick={(event) => {
                            setCollapsedChildren((val) => !val);
                            event.preventDefault();
                            event.stopPropagation();
                        }}
                    >
                        <Content />
                    </Box>
                    <Collapse in={menuItem.children && !collapsedChildren}>
                        {menuItem.children?.map((child, i) => (
                            <Link key={i} to={child.route}>
                                <Box className={clsx(isSelectedChild(child) && 'selected-child', 'menu-list-child')}>
                                    <Typography>{t(`sidebar:${child.name}`)}</Typography>
                                </Box>
                            </Link>
                        ))}
                    </Collapse>
                </>
            )}
        </Root>
    );
};
