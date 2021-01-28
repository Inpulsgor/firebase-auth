import React, { Suspense, useEffect } from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CommonLoading } from "react-loadingg";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// local imports
import routes from "../../pages/routes";
import { PrivateRoute, PublicRoute } from "../../services/helpers";
import { firebaseAuth } from "../../services/api/firebase";
import { Loader } from "../../components";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const location = useLocation();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("App", user);
    });
  }, []);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      {isLoading && <Loader />}
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
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
        </CSSTransition>
      </TransitionGroup>
    </Suspense>
  );
};

export default App;
