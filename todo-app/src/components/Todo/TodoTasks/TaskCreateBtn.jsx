import React from "react";

import { ReactComponent as PlusSvg } from "assets/icons/plus.svg";

const TaskCreateBtn = ({ onToggle }) => {
  return (
    <button onClick={onToggle} className="tasks__btn-create btn-create">
      <PlusSvg className="btn-create__icon" />
      <span className="btn-create__text">New task</span>
    </button>
  );
};

export default TaskCreateBtn;
