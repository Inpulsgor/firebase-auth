import React from "react";

import { ReactComponent as CheckedSvg } from "../../assets/icons/checked.svg";
import { ReactComponent as PenSvg } from "../../assets/icons/pen.svg";
import api from "../../services/api/api";
import "./Tasks.scss";

const Tasks = ({ list, handleEditTitle }) => {
  const handleEdit = () => {
    const newTitle = window.prompt("List name", list.name);

    if (newTitle) {
      handleEditTitle(list.id, newTitle);

      api
        .updateListTitle(list.id, {
          name: newTitle,
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="tasks__heading heading">
        <h2 className="heading__title">{list.name}</h2>
        <button className="heading__edit" onClick={handleEdit}>
          <PenSvg />
        </button>
      </div>

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
      </ul>
    </>
  );
};

export default Tasks;
