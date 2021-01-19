import React from "react";

import { TasksHeader, TasksList } from "../../components";
import api from "../../services/api/api";
import "./Tasks.scss";

const Tasks = ({ list, handleEditTitle }) => {
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
    </>
  );
};

export default Tasks;
