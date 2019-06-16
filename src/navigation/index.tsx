import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { LoginContainer } from "../containers";
import { HeaderContainer } from "../containers/HeaderContainer";

export const Navigation = () => (
  <BrowserRouter>
    <HeaderContainer />
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/login" component={LoginContainer} />
    </Switch>
  </BrowserRouter>
);
