import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as tasksOperations from "redux/tasks/tasksOperations";
import { TaskCreateBtn } from "components";

const TasksFooter = ({ list }) => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const selectedCategory = useSelector((state) => state.categories.selected);
  const isLoading = useSelector((state) => state.tasks.loading);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => setInputValue(value);
  const toggleOpenForm = () => setVisibleForm(!visibleForm);

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
      setInputValue("");
    }
  };

  return (
    <>
      <TaskCreateBtn onToggle={toggleOpenForm} />
      {visibleForm && (
        <form
          onSubmit={handleCreateTask}
          className="tasks__form tasks-form form"
        >
          <div className="group">
            <input
              type="text"
              id="task"
              className="tasks-form__field input"
              placeholder=" "
              value={inputValue}
              onChange={handleChange}
            />
            <label htmlFor="task" className="label">
              Task text..
            </label>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="tasks-form__btn-submit button"
          >
            {isLoading ? "Adding..." : "Add task"}
          </button>
          <button
            type="button"
            onClick={toggleOpenForm}
            className="tasks-form__btn-close button button--grey"
          >
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default TasksFooter;
