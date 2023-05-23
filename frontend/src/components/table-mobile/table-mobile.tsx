import { useState } from 'react';
import { Box, Collapse, IconButton } from '@mui/material';
import { Action, TableItemActions } from '../table-item-actions';
import { styled } from '@mui/styles';
import { Theme } from '@mui/material/styles';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    boxShadow: theme.dark ? theme.shadows[2] : '0px 1px 4px rgba(165, 165, 165, 0.16)',
    borderRadius: '10px',
    marginBottom: theme.spacing(6),
    position: 'relative',
    padding: theme.spacing(2),

    '& .collapse-icon': {
        boxShadow: theme.dark ? theme.shadows[3] : '0px 1px 4px rgba(165, 165, 165, 0.16)',
        backgroundColor: theme.palette.background.default,
        position: 'absolute',
        left: '50%',
        bottom: '0px',
        transform: 'translate(-50%, 50%)',
        '& svg': {
            color: theme.palette.text.secondary,
        },
    },
}));

type TableMobileProps = {
    enableCollapse?: boolean;
    actions?: Action[];
};

export const TableMobile: React.FC<TableMobileProps> = ({ enableCollapse, actions, children }) => {
    const [tableItemCollapsed, setTableItemCollapsed] = useState<boolean>(false);

    return (
        <Root>
            {actions && actions.length > 0 && <TableItemActions actions={actions} />}
            <Collapse in={tableItemCollapsed} collapsedSize={174}>
                {children}
            </Collapse>
            {enableCollapse && (
                <IconButton className="collapse-icon" onClick={() => setTableItemCollapsed((prev) => !prev)}>
                    {/* <ChevronDown style={{ transform: tableItemCollapsed ? 'rotate(0deg)' : 'rotate(-180deg)' }} /> */}
                </IconButton>
            )}
        </Root>
    );
};
