import React from "react";

import { ReactComponent as CheckedSvg } from "../../assets/icons/checked.svg";
import { ReactComponent as PenSvg } from "../../assets/icons/pen.svg";
import "./Tasks.scss";

const Tasks = () => {
  return (
    <>
      <div className="tasks__heading heading">
        <h2 className="heading__title">Frontend</h2>
        <button className="heading__edit">
          <PenSvg />
        </button>
      </div>

      <ul className="tasks__list task">
        <li className="task__item ">
          <input className="task__input" type="checkbox" id="check" />
          <label htmlFor="check">
            <CheckedSvg />
          </label>
          <input
            className="task__edit"
            value="React.js Hooks (useState, useReducer, useEffect...)"
            onChange={() => {}}
          />
        </li>
      </ul>
    </>
  );
};

export default Tasks;
