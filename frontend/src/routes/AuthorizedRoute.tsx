import { useAuth } from 'context/auth/store';
import { Route, Redirect, RouteProps } from 'react-router-dom';

export const AuthorizedRoute: React.FC<RouteProps> = ({ location, ...rest }) => {
    const [{ isLoggedIn }] = useAuth();
    console.log(isLoggedIn);

    if (false) {
        return (
            <Redirect
                push
                to={{
                    pathname: '/sign-in',
                    state: { from: location, redirected: true },
                }}
            />
        );
    }

    return <Route location={location} {...rest} />;
};

export default AuthorizedRoute;
