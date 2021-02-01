import React, { Suspense } from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommonLoading } from "react-loadingg";

import routes from "pages/routes";
import { PrivateRoute, PublicRoute } from "services/helpers";
import { Loader } from "components";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const location = useLocation();

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      {isLoading && <Loader />}
      <Switch location={location}>
        {routes.map((route) => {
          return route.private ? (
            <PrivateRoute key={route.label} {...route} />
          ) : (
            <PublicRoute
              key={route.label}
              {...route}
              restricted={route.restricted}
            />
          );
        })}
        <Redirect to="/auth" />
      </Switch>
    </Suspense>
  );
};

export default App;
