import React from "react";

const HeaderLayout = ({ children, ...props }) => {
  return (
    <header className="header" {...props}>
      {children}
    </header>
  );
};

export default HeaderLayout;
