import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

// PrivateRoute
export const PrivateRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.token);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/auth" />
      }
    />
  );
};

// PublicRoute
export const PublicRoute = ({ component: Component, ...routeProps }) => {
  const isAuthenticated = useSelector((state) => state.auth.token);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

// filterColorByID
export const filterColorByID = (data) => {
  return data.lists.map((item) => {
    item.color = data.colors.filter(
      (color) => color.id === item.colorId
    )[0].name;
    return item;
  });
};
