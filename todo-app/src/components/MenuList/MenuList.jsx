import React from "react";
import classnames from "classnames";

import ColorBadge from "../ColorBadge/ColorBadge";
import "./menuList.scss";

const MenuList = ({ items, handleCLick }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li
          key={index}
          onClick={handleCLick}
          className={classnames(item.className, {
            active: item.active,
          })}
        >
          {item.icon ? (
            <i className="list__icon">{item.icon}</i>
          ) : (
            <ColorBadge color={item.color} />
          )}
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
