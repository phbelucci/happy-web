import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Landing, OrphanagesMap } from './pages/index'

function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} ></Route>
                <Route path="/orphanages" component={OrphanagesMap}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;