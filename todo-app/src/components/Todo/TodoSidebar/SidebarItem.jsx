import React from "react";

import { SidebarBadge } from "components";
import { ReactComponent as RemoveSvg } from "assets/icons/remove.svg";

const sidebarItem = ({ category, activeCategory, onSelect, onRemove }) => {
  const selectCategory = () => {
    onSelect(category);
  };

  const RemoveCategory = () => {
    onRemove(category.id);
  };

  return (
    <li
      className={
        activeCategory && activeCategory.id === category.id
          ? `categories__item active`
          : `categories__item`
      }
      onClick={selectCategory}
    >
      <SidebarBadge color={category.color} />
      <span className="categories__name">{category.name}</span>
      <span className="categories__quantity">
        {category.tasks && category.tasks.length}
      </span>

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
