import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as PenSvg } from "assets/icons/pen.svg";

const TasksHeader = () => {
  const selectedCategory = useSelector(({ categories }) => categories.selected);

  return (
    <header className="tasks__header">
      <h2
        style={{ color: selectedCategory ? selectedCategory.color : null }}
        className="tasks__title"
      >
        {selectedCategory && selectedCategory.name}
      </h2>
      <button className="tasks__edit">
        <PenSvg />
      </button>
    </header>
  );
};

export default TasksHeader;
