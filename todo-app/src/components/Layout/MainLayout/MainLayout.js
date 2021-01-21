import React from "react";

const MainLayout = ({ children, ...props }) => {
  return (
    <main className="tasks" {...props}>
      {children}
    </main>
  );
};

export default MainLayout;
