import React from 'react';
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import {AuthPage} from './pages/AuthPage.tsx';

const useRoutes = isAuthenticated => {
    if(isAuthenticated) { 
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/q" exact>
                        <h1>q</h1>
                    </Route>
                    <Route path="/w" exact>
                        <h1>w</h1>
                    </Route>
                    <Route path="/e/:id">
                        <h1>e</h1>
                    </Route>
                    <Redirect to="/w" />
                </Switch>
            </BrowserRouter>
        );
    }
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <AuthPage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
}