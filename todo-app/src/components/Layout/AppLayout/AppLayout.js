import React from "react";

const AppLayout = ({ children, ...props }) => {
  return (
    <div className="App" {...props}>
      {children}
    </div>
  );
};

export default AppLayout;
