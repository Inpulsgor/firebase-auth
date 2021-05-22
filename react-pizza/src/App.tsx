import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { CommonLoading as Loader } from "react-loadingg";
// import { useSelector } from "react-redux";

import { Header } from "./components";
import routes from "./routes";

const App = (): JSX.Element => {
  // const isLoading = useSelector((state) => state.isLoading.isLoading);

  return (
    <>
      <Suspense
	  	fallback={
		  <Loader
			color="orange"
			size="large"
			className="loader"
		  />}>
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
