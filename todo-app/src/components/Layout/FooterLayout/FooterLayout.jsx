import React from "react";

const FooterLayout = ({ children, ...props }) => {
  return (
    <footer className="footer" {...props}>
      {children}
    </footer>
  );
};

export default FooterLayout;
