import React from "react";

import { ReactComponent as PenSvg } from "assets/icons/pen.svg";

const TasksHeader = ({ color, name }) => {
  // const handleEditTitle = (id, newTitle) => {
  //   lists.map((item) => {
  //     if (item.id === id) {
  //       item.name = newTitle;
  //     }
  //     return item;
  //   });

  //   // setLists(setLists);
  // };

  const handleEdit = () => {
    // const newTitle = window.prompt("List name", list.name);
    // if (newTitle) {
    //   handleEditTitle(list.id, newTitle);
    //   api
    //     .updateListTitle(list.id, {
    //       name: newTitle,
    //     })
    //     .catch((error) => console.log(error));
    // }
  };

  return (
    <header className="tasks__heading heading">
      {/* <h2 style={{ color }} className="heading__title">
        {name}
      </h2> */}
      <button className="heading__edit" onClick={handleEdit}>
        <PenSvg />
      </button>
    </header>
  );
};

export default TasksHeader;
