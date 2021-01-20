import React from "react";

import { ReactComponent as PenSvg } from "../../assets/icons/pen.svg";
import "./tasksHeader.scss";

const TasksHeader = ({ color, name, handleEdit }) => {
  return (
    <header className="tasks__heading heading">
      <h2 style={{ color }} className="heading__title">
        {name}
      </h2>
      <button className="heading__edit" onClick={handleEdit}>
        <PenSvg />
      </button>
    </header>
  );
};

export default TasksHeader;
