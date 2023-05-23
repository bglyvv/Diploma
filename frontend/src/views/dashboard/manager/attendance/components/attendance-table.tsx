import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
    Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdminPagination, Spinner } from 'components';
import { useTranslation } from 'react-i18next';

const Root = styled(Box)(({ theme }: { theme: Theme }) => ({
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(6.25),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    '& .table-container': {
        marginBottom: theme.spacing(3.75),
        '& .table-title': {
            color: theme.dark ? '#CFCFCF' : '#131927',
            marginBottom: theme.spacing(2),
        },
    },
}));

export const AttendanceTable: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Root>
            {false ? (
                <Spinner />
            ) : (
                <TableContainer className="table-container">
                    <Typography variant="h4" className="table-title">
                        Student&apos;s attendance
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ textAlign: 'left' }}>{t('roles:roleName')}</TableCell>
                                <TableCell>{t('roles:type')}</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell style={{ textAlign: 'left' }}>Salam</TableCell>
                                <TableCell>Salam</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
            <AdminPagination options={[10, 25, 50, 100]} />
        </Root>
    );
};
