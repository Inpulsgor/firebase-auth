import React from "react";
import { ReactComponent as CheckedSvg } from "../../assets/icons/checked.svg";
import "./Tasks.scss";

const Tasks = () => {
  return (
    <>
      <h2 className="tasks__title">Frontend</h2>
      <ul className="tasks__list">
        <li className="tasks__item task">
          <input className="task__input" type="checkbox" id="check" />
          <label htmlFor="check">
            <CheckedSvg />
          </label>
          <input
            className="task__edit"
            value="React.js Hooks (useState, useReducer, useEffect...)"
          />
        </li>
      </ul>
    </>
  );
};

export default Tasks;
