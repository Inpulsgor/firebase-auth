import React from "react";
import classnames from "classnames";

import { ReactComponent as RemoveSvg } from "../../assets/icons/remove.svg";
import { SidebarBadge } from "../../components";
import "./sidebarList.scss";

const SidebarList = ({
  items,
  isRemovable,
  handleClick,
  handleRemove,
  activeList,
}) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li
          key={item.id}
          className={classnames("list__item", {
            active: activeList && activeList.id === item.id,
          })}
          onClick={handleClick ? () => handleClick(item) : null}
        >
          {item.color && <SidebarBadge color={item.color.name} />}
          <span>
            {item.name}
            {item.tasks && `(${item.tasks.length})`}
          </span>

          {isRemovable && (
            <button
              className="list__remove"
              type="button"
              onClick={() => handleRemove(item.id)}
            >
              <RemoveSvg />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SidebarList;
