import React from "react";

import { TasksHeader, TasksList, TasksCreator } from "components";

const Tasks = () => {
  return (
    <div className="tasks__container">
      <TasksHeader
      // color={list.color.hex}
      // name={list.name}
      // handleEdit={handleEdit}
      />
      <TasksList />
      <TasksCreator />
    </div>
  );
};

export default Tasks;
