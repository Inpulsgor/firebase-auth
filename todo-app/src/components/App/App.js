import React, { Suspense, useEffect } from "react";
import { Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CommonLoading } from "react-loadingg";

// local imports
import routes from "../../pages/routes";
import { PrivateRoute, PublicRoute } from "../../services/helpers/helpers";
// operations
// import * as listsOperations from "../../redux/lists/listsOperations";
// import * as colorsOperations from "../../redux/colors/colorsOperations";
// styles
import "../../scss/main.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(listsOperations.fetchLists());
  }, [dispatch]);

  useEffect(() => {
    // dispatch(colorsOperations.fetchColors());
  }, [dispatch]);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      <Switch>
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
