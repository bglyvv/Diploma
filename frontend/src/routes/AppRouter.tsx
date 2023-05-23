import { lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const SignInPage = lazy(() => import('views/auth/sign-in-page'));

const AppRouter: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/sign-in" component={SignInPage} />

            <Redirect exact from="/" to="/d" />
            <Redirect from="*" to="/404" />
        </Switch>
    );
};
export default AppRouter;
