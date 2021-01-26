import React from "react";

const HeaderLayout = ({ children, ...props }) => {
  return (
    <div className="header" {...props}>
      {children}
    </div>
  );
};

export default HeaderLayout;
