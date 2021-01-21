import React, { useState } from "react";

import { ReactComponent as PlusSvg } from "../../assets/icons/plus.svg";
import * as api from "../../services/api/api";
import "./tasksCreator.scss";

const TasksCreator = ({ list, handleAddTask }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const toggleOpenForm = () => {
    setVisibleForm(!visibleForm);
    setInputValue("");
  };

  const handleCreateTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      comleted: false,
    };

    setIsLoading(true);
    api

      .createTask(obj)
      .then(({ data }) => {
        console.log(data);
        handleAddTask(list.id, data);
        toggleOpenForm();
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="tasks__creator creator">
      {!visibleForm ? (
        <button onClick={toggleOpenForm} className="creator__btn">
          <PlusSvg className="creator__icon" />
          <span className="creator__text">New Task</span>
        </button>
      ) : (
        <div className="creator__form form">
          <input
            type="text"
            className="form__field field"
            placeholder="Task text..."
            value={inputValue}
            onChange={handleChange}
          />
          <button
            disabled={isLoading}
            onClick={handleCreateTask}
            className="form__btn button"
          >
            {isLoading ? "Adding..." : "Add task"}
          </button>
          <button
            onClick={toggleOpenForm}
            className="form__btn button button--grey"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TasksCreator;
