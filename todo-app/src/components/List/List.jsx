import React from "react";
import classnames from "classnames";

import { ReactComponent as RemoveSvg } from "../../assets/icons/remove.svg";
import Badge from "../Badge/Badge";
import "./list.scss";

const List = ({ items, handleCLick, isRemovable, handleRemove }) => {
  return (
    <ul className="list">
      {items.map((item, index) => (
        <li
          key={item.id ? item.id : index}
          className={classnames("list__item", {
            active: item.active,
          })}
          onClick={handleCLick}
        >
          {item.icon ? (
            <i className="list__icon">{item.icon}</i>
          ) : (
            <Badge color={item.color} />
          )}
          <span>{item.name}</span>
          {isRemovable && (
            <button
              className="list__remove"
              type="button"
              onClick={() => handleRemove(item)}
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
