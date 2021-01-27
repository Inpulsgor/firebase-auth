import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CommonLoading } from "react-loadingg";
// import { useSelector } from "react-redux";

import Header from "./components/Header/Header";
import routes from "./routes";

const App = () => {
  // const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    <>
      <Suspense fallback={<CommonLoading color="orange" size="large" />}>
        {/* {isLoading && (
          <div className="app__overlay">
            <CommonLoading color="orange" size="large" />
          </div>
        )} */}

        <Header />
        <main className="content">
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
        </main>
      </Suspense>
    </>
  );
};

export default App;
