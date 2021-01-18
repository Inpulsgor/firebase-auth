import React from "react";
import "./menuList.scss";

const Sidebar = ({ items }) => {
  return (
    <ul className="list">
      {items &&
        items.map((item) => (
          <li
            key={item.title}
            className={item.active ? `list__item active` : "list__item"}
          >
            {item.icon ? (
              <i className="list__icon">{item.icon}</i>
            ) : (
              <i className={`list__badge list__badge--${item.color}`}></i>
            )}
            <span>{item.title}</span>
          </li>
        ))}
    </ul>
  );
};

export default Sidebar;
