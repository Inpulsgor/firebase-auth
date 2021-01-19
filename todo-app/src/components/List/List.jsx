import React from "react";
import classnames from "classnames";

import { ReactComponent as RemoveSvg } from "../../assets/icons/remove.svg";
import { Badge } from "../../components";
import "./list.scss";

const List = ({
  items,
  handleCLick,
  isRemovable,
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
          onClick={() => handleCLick(item)}
        >
          {item.color && <Badge color={item.color.name} />}
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

export default List;
