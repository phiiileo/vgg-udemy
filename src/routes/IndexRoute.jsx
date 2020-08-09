import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes'

export default function IndexRoute() {
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => (
                        <Route exact key={route.id} path={route.url} component={route.component} />
                    ))
                }
            </Switch>
        </Router>)
}
