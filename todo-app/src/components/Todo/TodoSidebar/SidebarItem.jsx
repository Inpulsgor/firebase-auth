import React from "react";

import { SidebarBadge } from "../../../components";
import { ReactComponent as RemoveSvg } from "../../../assets/icons/remove.svg";

const sidebarItem = ({ category, onSelect, onRemove }) => {
  const selectCategory = () => {
    onSelect(category);
  };

  const RemoveCategory = () => {
    onRemove(category.id);
  };

  return (
    <li className="categories__item" onClick={selectCategory}>
      <SidebarBadge color={category.color} />
      <span>{category.name}</span>
      <span>{category.tasks && category.tasks.length}</span>

      <button
        type="button"
        className="categories__btn-remove"
        onClick={RemoveCategory}
      >
        <RemoveSvg />
      </button>
    </li>
  );
};

export default sidebarItem;
