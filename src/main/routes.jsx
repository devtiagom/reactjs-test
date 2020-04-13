import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from '../template/pages/home/Home';
import Profile from '../template/pages/profile/Profile';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/profile" component={Profile} />
            <Redirect from="*" to="/" />
        </Switch>
    </BrowserRouter>
);