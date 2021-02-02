import React from "react";
import { useSelector } from "react-redux";

import { TasksItem } from "components";

const TasksList = () => {
  const selectedCategory = useSelector((state) => state.categories.selected);

  return (
    <ul className="tasks__list task">
      {/* {selectedCategory &&
        selectedCategory.tasks.map((task) => (
          <TasksItem key={task} task={task} />
        ))} */}
    </ul>
  );
};

export default TasksList;
