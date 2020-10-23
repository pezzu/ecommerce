import React from "react";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Logs from "./pages/Logs";
import store, { history } from "./app/store";

const Root = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/cart" render={() => <Cart />} />
          <Route path="/logs" render={() => <Logs />} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default Root;
