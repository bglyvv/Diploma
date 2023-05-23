import { Page } from 'components';
import { PaginationProvider } from 'context/pagination/store';
import { useTranslation } from 'react-i18next';
import { AttendanceTable } from './components/attendance-table';

export const Attendance: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Page title={t('attendance:pageTitle')}>
            <PaginationProvider>
                <AttendanceTable />
            </PaginationProvider>
        </Page>
    );
};
