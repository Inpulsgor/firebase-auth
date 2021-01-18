import React from "react";
import "./sidebar.scss";
import iconSvg from "../../assets/icons/task.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li className="sidebar__item">
          <i>
            <img src={iconSvg} alt="List icon"></img>
          </i>
          <span>All tasks</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
