import React from "react";

import { ReactComponent as CheckedSvg } from "assets/icons/checked.svg";

const Task = ({ id, text }) => {
  return (
    <li className="tasks-list__item ">
      <input
        className="tasks-list__checkbox"
        type="checkbox"
        id={`task-${id}`}
      />
      <label htmlFor={`task-${id}`}>
        <CheckedSvg />
      </label>
      <p className="tasks-list__text">{text}</p>
    </li>
  );
};

export default Task;
