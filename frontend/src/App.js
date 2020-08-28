import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

import PrivateRoute from "./utilityComponents/PrivateRoutes";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/login/Login";
import Account from "./screens/account/Account";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/home" component={Dashboard} />
                <PrivateRoute path="/account" component={Account} />
            </Switch>
        </BrowserRouter>
    );
};
