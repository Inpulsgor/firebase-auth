import React from "react";

import { Task } from "../../components";

const TasksList = ({ list }) => {
  return (
    <ul className="tasks__list task">
      {!list.tasks && <h2 className="task__empty">Tasks list is empty :(</h2>}
      {list.tasks &&
        list.tasks.length > 0 &&
        list.tasks.map((task) => <Task key={task.id} {...task} />)}
    </ul>
  );
};

export default TasksList;
