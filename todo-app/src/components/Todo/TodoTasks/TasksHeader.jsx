import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as PenSvg } from "assets/icons/pen.svg";

const TasksHeader = () => {
  const selectedCategory = useSelector(({ categories }) => categories.selected);

  return (
    <header className="tasks__header tasks-top">
      <h2
        style={{ color: selectedCategory && selectedCategory.color }}
        className="tasks-top__title"
      >
        {selectedCategory && selectedCategory.name}
      </h2>
      <button className="tasks-top__edit">
        <PenSvg />
      </button>
    </header>
  );
};

export default TasksHeader;
