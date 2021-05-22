import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Stock from "./pages/stocks";

const Router = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/stock" component={Stock} exact />
      </Switch>
    </main>
  );
};

export default Router;
