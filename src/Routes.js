import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LogIn from './LogInPage';
import SignUpPage from './SignUpPage';
import CompanyList from './CompanyList';
import JobList from './JobList';
import HomePage from './HomePage';
import CompanyDetail from './CompanyDetail';
import ProfileForm from './Profile';
import PrivateRoute from './PrivateRoute';

/**Site-wide routes
 *
 * Parts of site should only be visitable when logged in. Those routes are wrapped by <PrivateRoute>, which is an authorization component
 *
 * Visiting a non-existant route redirects to the homepage
 */

function Routes({ login, signup }) {
    console.debug(
        'Routes',
        `login=${typeof login}`,
        `register=${typeof register}`,
    );

    return (
        <div classname='pt-5'>
            <Switch>
                <Route exact path="/">
                        <HomePage />
                    </Route>

                    <Route exact path="/login">
                        <LogIn login={login} />
                    </Route>

                    <Route exact path="/signup">
                        <SignUpPage signup={signup} />
                    </Route>

                    <Route exact path="/companies">
                        <CompanyList />
                    </Route>

                    <Route exact path="/jobs">
                        <JobList />
                    </Route>

                    <PrivateRoute exact path="/companies/:handle">
                        <CompanyDetail />
                    </PrivateRoute>

                    <PrivateRoute path="/profile">
                        <ProfileForm />
                    </PrivateRoute>

                    <Redirect exact to="/" />
            </Switch>


        </div>
    );
}

export default Routes;
