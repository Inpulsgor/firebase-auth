import React from "react";
import "./Tasks.scss";

const Tasks = () => {
  return (
    <>
      <h2 className="tasks__title">Frontend</h2>
      <ul className="tasks__list">
        <li className="tasks__item task">
          <input type="checkbox" id="check" />
          <label htmlFor="check"></label>
        </li>
      </ul>
    </>
  );
};

export default Tasks;
