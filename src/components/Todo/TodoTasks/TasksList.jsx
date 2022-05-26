import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { TasksItem, TasksForm } from "components";
import * as tasksOperations from "redux/tasks/tasksOperations";

const TasksList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const selectedCategory = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCategory) {
      const id = selectedCategory.id;
      dispatch(tasksOperations.getTasksByID(id));
    }
  }, [selectedCategory, dispatch]);

  return (
    <div className="tasks__body">
      <ul className="tasks__list tasks-list">
        {tasks && tasks.length > 0 ? (
          tasks.map((task) => <TasksItem key={task.id} {...task} />)
        ) : (
          <li className="tasks-list__empty">Tasks list is empty :( </li>
        )}
      </ul>
      <TasksForm />
    </div>
  );
};

export default TasksList;
