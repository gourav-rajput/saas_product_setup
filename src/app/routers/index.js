import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "../pages/common/auth/login";
import Signup from "../pages/common/auth/signup";

const NotFoundDesktop = Loadable({
  loader: () => import('../components/not-found/index'),
  loading: Loading,
});

const ScriptDesktop = Loadable({
  loader: () => import('../script'),
  loading: Loading,
});


const NOT_FOUND_COMPONENT = (NotFoundDesktop);

const Routers = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path"login" component={ Signup } />
        <Route path="/about" component={ WelcomeDesktop } />
        <Route component={ NOT_FOUND_COMPONENT } />
      </Switch>
    </BrowserRouter>
  )
};

export { Routers };
