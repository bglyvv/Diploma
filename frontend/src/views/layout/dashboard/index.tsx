import { lazy } from 'react';
import { useAuth } from 'context/auth/store';
const ManagerDashboardLayout = lazy(() => import('views/layout/dashboard/manager'));

const DashboardLayout: React.FC = () => {
    const [{ user }] = useAuth();

    console.log(user);

    return <ManagerDashboardLayout />;
};
export default DashboardLayout;
