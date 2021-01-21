import React, { Suspense, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { CommonLoading } from "react-loadingg";

// local imports
import { AppLayout, AsideLayout, MainLayout } from "../Layout";
import routes from "../../pages/routes";
// operations
import * as listsOperations from "../../redux/lists/listsOperations";
import * as colorsOperations from "../../redux/colors/colorsOperations";
// styles
import "../../scss/main.scss";

const App = ({ fetchLists, fetchColors }) => {
  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      <AppLayout>
        <AsideLayout />
        <MainLayout>
          <Switch>
            {routes.map((route) => {
              <Route
                key={route.label}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />;
            })}
            <Redirect to="/" />
          </Switch>
        </MainLayout>
      </AppLayout>
    </Suspense>
  );
};

const mapDispatchToProps = {
  fetchLists: listsOperations.fetchLists,
  fetchColors: colorsOperations.fetchColors,
};

export default connect(null, mapDispatchToProps)(App);
