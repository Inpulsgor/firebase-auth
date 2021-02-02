import React from "react";

import { SidebarBadge } from "components";
import { ReactComponent as RemoveSvg } from "assets/icons/remove.svg";

const sidebarItem = ({ category, selectedCategory, onSelect, onRemove }) => {
  const selectCategory = (e) => {
    if (e.target.nodeName !== "LI") return;
    onSelect(category);
  };

  const RemoveCategory = (e) => {
    if (e.currentTarget && e.target.nodeName !== "BUTTON")
      onRemove(category.id);
  };

  return (
    <li
      className={
        selectedCategory && selectedCategory.id === category.id
          ? `categories__item active`
          : `categories__item`
      }
      onClick={selectCategory}
    >
      <SidebarBadge color={category.color} />
      <span className="categories__name">{category.name}</span>
      <span className="categories__quantity"></span>

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
