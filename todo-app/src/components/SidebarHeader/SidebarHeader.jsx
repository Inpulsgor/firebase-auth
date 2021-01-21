import React from "react";
import { useHistory } from "react-router-dom";

import { ReactComponent as TasksSvg } from "../../assets/icons/tasks.svg";
import "./sidebarHeader.scss";

const SidebarHeader = () => {
  let history = useHistory();

  const showAllLists = () => {
    history.push("/");
  };

  return (
    <header className="sidebar__header header">
      <button onClick={showAllLists} className="header__btn">
        <TasksSvg className="header__icon" />
        <span className="header__text">All tasks</span>
      </button>
    </header>
  );
};

export default SidebarHeader;
