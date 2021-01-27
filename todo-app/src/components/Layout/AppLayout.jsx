import React from "react";
import { useLocation } from "react-router-dom";

const AppLayout = ({ children, ...props }) => {
  const location = useLocation();

  return (
    <div
      className={location.pathname === "/auth" ? "app__auth" : "app"}
      {...props}
    >
      {children}
    </div>
  );
};

export default AppLayout;
