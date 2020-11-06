import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Products from "./components/products";
import Contacts from "./components/contacts";
import Cart from "./components/cart";
import Mens from "./components/mens";
import Women from "./components/women";
import Kids from "./components/kids";
import Myaccount from "./components/myaccount";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/cart" component={Cart} />
      <Route path="/mens" component={Mens} />
      <Route path="/women" component={Women} />
      <Route path="/mens" component={Mens} />
      <Route path="/kids" component={Kids} />
      <Route path="/cart" component={Cart} />
      <Route path="/myaccount" component={Myaccount} />
    </Switch>
  </BrowserRouter>
);

export default Main;
