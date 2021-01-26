import React from "react";

const SidebarLayout = ({ children, ...props }) => {
  return (
    <aside className="todo__sidebar sidebar" {...props}>
      {children}
    </aside>
  );
};

export default SidebarLayout;
