import React from "react";
import "./Tasks.scss";

const Tasks = () => {
  return (
    <>
      <h2 className="tasks__title">Frontend</h2>
      <ul className="tasks__list">
        <li className="tasks__item task">
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <svg
              width="11"
              height="8"
              viewBox="0 0 11 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
        </li>
      </ul>
    </>
  );
};

export default Tasks;
