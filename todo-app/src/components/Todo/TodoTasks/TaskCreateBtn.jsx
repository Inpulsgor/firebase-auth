import React from "react";

import { ReactComponent as PlusSvg } from "assets/icons/plus.svg";

const TaskCreateBtn = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="creator__btn">
      <PlusSvg className="creator__icon" />
      <span className="creator__text">New Task</span>
    </button>
  );
};

export default TaskCreateBtn;
