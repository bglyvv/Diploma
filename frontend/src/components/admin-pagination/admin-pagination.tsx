import {
    Box,
    MenuItem,
    Pagination as MUIPagination,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';
import { styled } from '@mui/styles';
import { usePagination } from 'context/pagination/store';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as ArrowDownIcon } from 'assets/icons/dashboard/arrow-down.svg';

type PaginationProps = {
    options?: number[];
};

const Root = styled(Stack)(({ theme }: { theme: Theme }) => ({
    '& .MuiSelect-select': {
        padding: theme.spacing(0.6, 1.5),
    },
    '& .css-1u9e3af-MuiInputBase-root-MuiOutlinedInput-root': {
        height: '30px',
    },
    '& .rows-page': {
        display: 'flex',
        marginRight: '14px',
    },
    '& .text-field': {
        width: 'fit-content',
        height: '40px',
        margin: '8px 0 0 5px',
    },
    '& .parent-box': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '& .child-box': {
        display: 'flex',
        alignItems: 'center',
    },
}));

export const AdminPagination: React.FC<PaginationProps> = ({ options = [5, 10, 20, 50, 100] }) => {
    const { t } = useTranslation();
    const [{ pageNumber, pageCount, pageSize, totalCount }, dispatch] = usePagination();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        dispatch({ type: 'INIT_PAGE' });
    }, []);

    const getPaginationSize = (): 'small' | 'medium' | 'large' => {
        if (window.innerWidth < 500 && window.innerWidth > 390) {
            return 'medium';
        }

        if (window.innerWidth <= 390) {
            return 'small';
        }
        return 'large';
    };

    return (
        <Root spacing={2}>
            <Box className="parent-box">
                <Box className="child-box">
                    {totalCount !== undefined && (
                        <Typography fontSize={12} color="#7A8892" mr={2}>
                            {t('dashboard:total')}: <span style={{ fontWeight: 'bold' }}>{totalCount}</span>
                        </Typography>
                    )}
                    <Typography fontSize={12} color="#7A8892">
                        {isMobile ? t('dashboard:cardsPerPage') : t('dashboard:rowsPerPage')}:
                    </Typography>
                    <TextField
                        onChange={(e) => {
                            dispatch({ type: 'SET_PAGE_SIZE', pageSize: parseInt(e.target.value) });
                            dispatch({ type: 'SET_PAGE', pageNumber: 1 });
                        }}
                        value={pageSize}
                        className="text-field"
                        select
                        variant="outlined"
                        SelectProps={{
                            IconComponent: ArrowDownIcon,
                        }}
                    >
                        {options?.map((option, index) => (
                            <MenuItem key={index} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
                {(totalCount as number) > (pageSize as number) && (
                    <MUIPagination
                        shape="rounded"
                        color="secondary"
                        count={pageCount}
                        size={getPaginationSize()}
                        page={pageNumber || 1}
                        onChange={(_, page): void => {
                            dispatch({ type: 'SET_PAGE', pageNumber: page });
                        }}
                        style={{ marginRight: '16px' }}
                    />
                )}
            </Box>
        </Root>
    );
};
