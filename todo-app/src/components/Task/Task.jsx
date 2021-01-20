import React from "react";

import { ReactComponent as CheckedSvg } from "../../assets/icons/checked.svg";
import "./task.scss";

const Task = ({ id, text }) => {
  return (
    <li key={id} className="task__item ">
      <input className="task__input" type="checkbox" id={`task-${id}`} />
      <label htmlFor={`task-${id}`}>
        <CheckedSvg />
      </label>
      <input readOnly className="task__edit" value={text} onChange={() => {}} />
    </li>
  );
};

export default Task;
