import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { AppNavbar } from "./components/AppNavbar"
import { Index } from "./pages/Index"
import { AboutPage } from "./pages/AboutPage"
import { AppPage } from "./pages/AppPage"
import * as jQuery from "jquery";


class App extends React.Component<{}, {}>{


    constructor() {
        super();
        console.log("hello,world");
    }

    render() {
        return (
            <div>
                <AppNavbar />
                {this.props.children}
            </div>
        )
    }
}

let template = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index} />
            <Route path="/index" component={Index} />
            <Route path="/about" component={AboutPage} />
            <Route path="/app" component={AppPage} />
        </Route>
    </Router>
);

ReactDOM.render(template, document.getElementById("context"));