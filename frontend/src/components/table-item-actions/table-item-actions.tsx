import { useState } from 'react';
import { IconButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export type Action = {
    icon: React.ReactNode;
    title: string;
    onClick: () => void;
};

export const TableItemActions: React.FC<{ actions: Action[] }> = ({ actions }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const MenuComponent = styled(Menu)(({ theme }: { theme: Theme }) => ({
        '& .menu-item': {
            '&:hover': {
                '& > *': {
                    color: theme.palette.primary.main,
                },
            },
        },
    }));

    return (
        <>
            <MenuComponent
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {actions.map((action, index) => (
                    <MenuItem
                        onClick={() => {
                            setAnchorEl(null);
                            action.onClick();
                        }}
                        dense
                        className="menu-item"
                        key={index}
                    >
                        <ListItemIcon>{action.icon}</ListItemIcon>
                        <ListItemText>{action.title}</ListItemText>
                    </MenuItem>
                ))}
            </MenuComponent>

            <IconButton onClick={handleClick} sx={{ display: 'flex', margin: '0px -14px 4px auto' }}>
                <MoreVertIcon sx={{ color: 'text.secondary' }} />
            </IconButton>
        </>
    );
};
