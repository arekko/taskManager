import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeContainer, LoginContainer } from "../containers";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={HomeContainer} />
      <Route exact={true} path="/login" component={LoginContainer} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
