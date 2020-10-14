import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import store from "./app/store";

const Root = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;
