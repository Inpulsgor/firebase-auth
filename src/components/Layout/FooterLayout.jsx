import React from "react";
import { useLocation } from "react-router-dom";

const FooterLayout = ({ children, ...props }) => {
  const location = useLocation();

  return (
    <footer
      className={location.pathname === "/auth" ? "footer__auth" : "footer"}
      {...props}
    >
      {children}
    </footer>
  );
};

export default FooterLayout;
