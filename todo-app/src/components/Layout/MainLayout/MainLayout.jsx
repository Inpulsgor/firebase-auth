import React from "react";

const MainLayout = ({ children, ...props }) => {
  return (
    <main className="main" {...props}>
      {children}
    </main>
  );
};

export default MainLayout;
