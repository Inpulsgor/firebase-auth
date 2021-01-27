import React, { Suspense, useEffect } from "react";
import { Switch, Redirect, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { CommonLoading } from "react-loadingg";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// local imports
import routes from "../../pages/routes";
import { PrivateRoute, PublicRoute } from "../../services/helpers";
import { firebaseAuth } from "../../services/api/firebase";
import { Loader } from "../../components";
// operations
// import * as listsOperations from "../../redux/lists/listsOperations";
// import * as colorsOperations from "../../redux/colors/colorsOperations";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  const location = useLocation();
  // const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      console.log("App", user);
    });
  }, []);

  // useEffect(() => {
  //   dispatch(listsOperations.fetchLists());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(colorsOperations.fetchColors());
  // }, [dispatch]);

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
