import React from "react";

import { SidebarBadge } from "../../../components";
import { ReactComponent as RemoveSvg } from "../../../assets/icons/remove.svg";

const sidebarItem = ({ list, handleCategorySelect, handleCategoryRemove }) => {
  console.log(list);
  return (
    <li
      className="categories__item"
      onClick={handleCategorySelect ? () => handleCategorySelect(list) : null}
    >
      <SidebarBadge color={list.color.name} />
      <span>{list.name}</span>
      <span>{list.tasks && list.tasks.length}</span>

      <button
        type="button"
        className="categories__btn-remove"
        onClick={() => handleCategoryRemove(list.id)}
      >
        <RemoveSvg />
      </button>
    </li>
  );
};

export default sidebarItem;
