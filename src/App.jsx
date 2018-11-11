import { Route, Switch } from "react-router-dom";
import React from 'react'


import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Header from './Header.jsx';

const App = () => {
    const someVariable = true;

    return (
        <div>
            <Header />
            <Switch>
                {/* these are good */}
                <Route exact path="/" component={Home} />
                <Route
                    path="/about"
                    render={props => <About {...props} extra={someVariable} />}
                />
                {/* do not do this */}
                <Route
                    path="/contact"
                    component={props => <Contact {...props} extra={someVariable} />}
                />
            </Switch>
        </div>
    );
};

export default App


