// import { Permissions } from 'enum';
import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { hasPermission } from 'ui-services/permission.ui-service';

const Dashboard = lazy(() => import('views/dashboard/manager/home'));
const AttendancePage = lazy(() => import('views/dashboard/manager/attendance'));

const ManagerRouter: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/d" component={Dashboard} />
            <Route exact path="/d/attendance/:id" component={AttendancePage} />

            <Redirect from="*" to="/d/404" />
        </Switch>
    );
};
export default ManagerRouter;
