import React from "react";

import { ReactComponent as CheckedSvg } from "assets/icons/checked.svg";

const Task = ({ task }) => {
  console.log(task);
  return (
    <li className="task__item ">
      <input className="task__input" type="checkbox" id={`task-${task}`} />
      <label htmlFor={`task-${task}`}>
        <CheckedSvg />
      </label>
      <input readOnly className="task__edit" value={task} onChange={() => {}} />
    </li>
  );
};

export default Task;
