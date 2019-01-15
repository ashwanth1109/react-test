import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route } from "react-router-dom";
import IndexPage from "./pages/index";
import ShowPage from "./pages/show";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Router basename={process.env.PUBLIC_URL}>
                        <React.Fragment>
                            <Route exact path="/" component={IndexPage} />
                            <Route path="/user" component={ShowPage} />
                        </React.Fragment>
                    </Router>
                </React.Fragment>
            </Provider>
        );
    }
}

export default App;
