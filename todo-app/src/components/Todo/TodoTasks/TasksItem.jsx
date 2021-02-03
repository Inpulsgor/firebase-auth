import React from "react";

import { ReactComponent as CheckedSvg } from "assets/icons/checked.svg";

const Task = ({ id, text }) => {
  return (
    <li className="task__item ">
      <input className="task__input" type="checkbox" id={`task-${id}`} />
      <label htmlFor={`task-${id}`}>
        <CheckedSvg />
      </label>
      <p className="task__edit">{text}</p>
    </li>
  );
};

export default Task;
