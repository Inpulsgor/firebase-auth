import React from "react";

import { TasksHeader, TasksList, TasksCreator } from "../../components";
import api from "../../services/api/api";
import "./Tasks.scss";

const Tasks = ({ list, handleEditTitle, handleAddTask }) => {
  const handleEdit = () => {
    const newTitle = window.prompt("List name", list.name);

    if (newTitle) {
      handleEditTitle(list.id, newTitle);

      api
        .updateListTitle(list.id, {
          name: newTitle,
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <TasksHeader name={list.name} handleEdit={handleEdit} />
      <TasksList list={list} />
      <TasksCreator list={list} handleAddTask={handleAddTask} />
    </>
  );
};

export default Tasks;
