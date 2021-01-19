import React from "react";

import { ReactComponent as PenSvg } from "../../assets/icons/pen.svg";
import "./tasksHeader.scss";

const TasksHeader = ({ name, handleEdit }) => {
  return (
    <header className="tasks__her heading">
      <h2 className="heading__title">{name}</h2>
      <button className="heading__edit" onClick={handleEdit}>
        <PenSvg />
      </button>
    </header>
  );
};

export default TasksHeader;
