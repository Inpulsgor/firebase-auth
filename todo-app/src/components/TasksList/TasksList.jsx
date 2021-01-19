import React from "react";

import { ReactComponent as CheckedSvg } from "../../assets/icons/checked.svg";
import "./tasksList.scss";

const TasksList = ({ list }) => {
  return (
    <ul className="tasks__list task">
      {!list.tasks.length && (
        <h2 className="task__empty">Tasks list is empty :(</h2>
      )}
      {list.tasks.map((task) => (
        <li key={task.id} className="task__item ">
          <input
            className="task__input"
            type="checkbox"
            id={`task-${task.id}`}
          />
          <label htmlFor={`task-${task.id}`}>
            <CheckedSvg />
          </label>
          <input
            readOnly
            className="task__edit"
            value={task.text}
            onChange={() => {}}
          />
        </li>
      ))}
      <div className="tasks__form"></div>
    </ul>
  );
};

export default TasksList;
