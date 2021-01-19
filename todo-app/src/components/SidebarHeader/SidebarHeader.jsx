import React from "react";

import { ReactComponent as TasksSvg } from "../../assets/icons/tasks.svg";
import "./sidebarHeader.scss";

const SidebarHeader = () => {
  return (
    <header className="sidebar__header header">
      <button className="header__btn-all">
        <TasksSvg />
        <span>All tasks</span>
      </button>
    </header>
  );
};

export default SidebarHeader;
