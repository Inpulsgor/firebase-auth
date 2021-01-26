// import React, { Suspense, useEffect } from "react";
import React, { Suspense } from "react";
import { Switch, Redirect } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { useSelector } from "react-redux";
import { CommonLoading } from "react-loadingg";

// local imports
import routes from "../../pages/routes";
import { PrivateRoute, PublicRoute } from "../../services/helpers/helpers";
import { Loader } from "../../components";
import { firebaseAuth } from "../../services/firebase/firebase";
// operations
// import * as listsOperations from "../../redux/lists/listsOperations";
// import * as colorsOperations from "../../redux/colors/colorsOperations";
// styles
import "../../scss/main.scss";

const App = () => {
  const isLoading = useSelector((state) => state.isLoading);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   firebaseAuth.onAuthStateChanged((user) => {
  //     console.log("App", user);
  //   });
  // }, []);

  // useEffect(() => {
  //   dispatch(listsOperations.fetchLists());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(colorsOperations.fetchColors());
  // }, [dispatch]);

  return (
    <Suspense fallback={<CommonLoading color="orange" size="large" />}>
      {isLoading && <Loader />}
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
