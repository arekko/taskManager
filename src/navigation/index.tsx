import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { LoginContainer } from "../containers";

export const Navigation = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/login" component={LoginContainer} />
    </Switch>
  </BrowserRouter>
);
