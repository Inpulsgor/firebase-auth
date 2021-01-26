import React from "react";

const TasksLayout = ({ children, ...props }) => {
  return (
    <section className="todo__tasks tasks" {...props}>
      {children}
    </section>
  );
};

export default TasksLayout;
