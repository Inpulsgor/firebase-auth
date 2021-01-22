import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CommonLoading } from "react-loadingg";

// local imports
import { AppLayout, AsideLayout, MainLayout } from "../Layout";
import routes from "../../pages/routes";
// operations
import * as listsOperations from "../../redux/lists/listsOperations";
import * as colorsOperations from "../../redux/colors/colorsOperations";
// styles
import "../../scss/main.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listsOperations.fetchLists());
  }, [dispatch]);

  useEffect(() => {
    dispatch(colorsOperations.fetchColors());
  }, [dispatch]);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      <AppLayout>
        <AsideLayout />
        <MainLayout>
          <Switch>
            {routes.map((route) => {
              return (
                <Route
                  key={route.label}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            })}
            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </AppLayout>
    </Suspense>
  );
};

export default App;
