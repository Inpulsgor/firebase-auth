import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TasksItem, TasksForm } from "components";
import * as tasksOperations from "redux/tasks/tasksOperations";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksOperations.getTasks());
  }, [dispatch]);

  return (
    <div>
      <ul className="tasks__list task">
        {tasks.length > 0 &&
          tasks.map((task) => <TasksItem key={task.id} {...task} />)}
      </ul>
      <TasksForm />
    </div>
  );
};

export default TasksList;
