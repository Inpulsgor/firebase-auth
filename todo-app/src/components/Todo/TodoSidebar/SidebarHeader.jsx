import React from "react";

import { ReactComponent as TasksSvg } from "../../../assets/icons/list.svg";

const SidebarHeader = () => {
  return (
    <header className="sidebar__header sidebar-top">
      <button className="sidebar-top__btn">
        <TasksSvg className="sidebar-top__icon" />
        <span className="sidebar-top__text">All categories</span>
      </button>
    </header>
  );
};

export default SidebarHeader;
