import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min";

import PrivateRoute from "./utilityComponents/PrivateRoutes";
import Dashboard from "./screens/dashboard/Dashboard";
import Login from "./screens/login/Login";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <PrivateRoute path="/home" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};
