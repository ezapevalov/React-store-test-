import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { routes } from '~src/router/router';

import TopNav from '~src/components/topnav/topnav'

class App extends React.Component {
    state = {
        page : 'cart'
    }

    setPage(page) {
        this.setState({
            page : page
        })
    }

    render() {
        let routesItems = routes.map((route) => {
            return <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
            />
        });

        return <BrowserRouter>
            <div className="container">
                <TopNav/>

                <div className="py-5 text-center">
                    <img className="d-block mx-auto mb-4"
                         src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72"
                         height="72"
                    />
                    <h2>App</h2>
                    <p className="lead">Parent component containing all pages</p>
                </div>

                <Switch>
                    {routesItems}
                </Switch>
            </div>
        </BrowserRouter>
    }
}

export default App