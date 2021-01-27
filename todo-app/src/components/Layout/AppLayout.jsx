import React from "react";

const AppLayout = ({ children, ...props }) => {
  return (
    <div className="app" {...props}>
      {children}
    </div>
  );
};

export default AppLayout;
