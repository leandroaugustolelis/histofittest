import React from "react";
import { Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import NavBarAuth from "../components/NavBarAuth";
import { useAuth } from "../hooks/auth";
import { Dashboard } from "../pages/Dashboard";
import Products from "../pages/Products/Products";
import Reports from "../pages/Products/Reports";
import { Profile } from "../pages/Profile";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Welcome } from "../pages/Welcome";

import Route from "./Route";

const Routes = () => {
  const { user } = useAuth();
  return (
    <>
      {user ? <NavBarAuth /> : <NavBar />}
      <Switch>
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/" exact component={Welcome} />
        <Route path="/profile" exact component={Profile} isPrivate />
        <Route path="/reports" component={Reports} />
        <Route path="/products" component={Products} />
        <Route path="/dashboard" component={Dashboard} isPrivate />
      </Switch>
    </>
  );
};

export default Routes;
