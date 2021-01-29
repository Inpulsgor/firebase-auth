import React from "react";

// import { Task } from "components";

const TasksList = ({ list }) => {
  return (
    <ul className="tasks__list task">
      {/* {list.items.length > 0 &&
        list.items.map((task) => <Task key={task.id} {...task} />)} */}
    </ul>
  );
};

export default TasksList;
