import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomeContainer, LoginContainer } from "../containers";
import { Header } from "../components/Header";

export const Navigation = () => (
  <BrowserRouter>
  <Header />
    <Switch>
      <Route exact={true} path="/" component={HomeContainer} />
      <Route exact={true} path="/login" component={LoginContainer} />
    </Switch>
  </BrowserRouter>
);


