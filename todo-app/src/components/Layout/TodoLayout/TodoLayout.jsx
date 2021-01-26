import React from "react";

const TodoLayout = ({ children, ...props }) => {
  return (
    <div className="todo" {...props}>
      {children}
    </div>
  );
};

export default TodoLayout;
