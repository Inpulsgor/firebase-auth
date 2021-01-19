import React, { useState, useEffect } from "react";

import { List, CreateList, Tasks } from "./components";
import api from "./services/api/api";
import "./scss/App.scss";

const App = () => {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  const [activeList, setActiveList] = useState(null);

  useEffect(() => {
    api.getListsWithExpand().then(({ data }) => {
      setLists(data);
    });

    api.getColors().then(({ data }) => {
      setColors(data);
    });
  }, []);

  const addToList = (modifiedObject) => {
    const updatedList = [...lists, modifiedObject];
    setLists(updatedList);
  };

  const handleCLick = (item) => {
    setActiveList(item);
  };

  const handleRemove = (id) => {
    api.deleteList(id);
    const updatedList = lists.filter((list) => list.id !== id);
    setLists(updatedList);
  };

  const handleEditTitle = (id, newTitle) => {
    const listWithUpdatedTitle = lists.map((item) => {
      if (item.id === id) {
        item.name = newTitle;
      }
      return item;
    });

    setLists(setLists);
  };

  return (
    <div className="app">
      <div className="app__sidebar">
        <List items={[{ name: "All tasks", id: 123 }]} />
        {lists && (
          <List
            items={lists}
            handleCLick={handleCLick}
            handleRemove={handleRemove}
            activeList={activeList}
            isRemovable
          />
        )}
        <CreateList colors={colors} onAdd={addToList} />
      </div>

      <div className="app__tasks">
        {lists && activeList && (
          <Tasks list={activeList} handleEditTitle={handleEditTitle} />
        )}
      </div>
    </div>
  );
};

export default App;
