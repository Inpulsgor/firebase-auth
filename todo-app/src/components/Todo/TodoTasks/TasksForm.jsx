import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as tasksOperations from "redux/tasks/tasksOperations";
import { TaskCreateBtn } from "components";

const TasksFooter = ({ list }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const selectedCategory = useSelector((state) => state.categories.selected);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const toggleOpenForm = () => {
    setVisibleForm(!visibleForm);
    setInputValue("");
  };

  const handleCreateTask = (e) => {
    e.preventDefault();

    if (selectedCategory && inputValue) {
      const id = selectedCategory.id;
      const newTask = {
        text: inputValue,
        completed: false,
      };

      dispatch(tasksOperations.createTask(id, newTask));
      setVisibleForm(false);
    }
  };

  return (
    <div className="tasks__body tasks">
      {!visibleForm ? (
        <TaskCreateBtn onToggle={toggleOpenForm} />
      ) : (
        <form onSubmit={handleCreateTask} className="creator__form form">
          <input
            type="text"
            className="form__field field"
            placeholder="Task text..."
            value={inputValue}
            onChange={handleChange}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="form__btn button"
          >
            {isLoading ? "Adding..." : "Add task"}
          </button>
          <button
            type="button"
            onClick={toggleOpenForm}
            className="form__btn button button--grey"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default TasksFooter;
