import React, { useState, useEffect } from "react";

import { List, CreateList, Tasks } from "./components";
import { filterColorByID } from "./services/helpers";
import JSON from "./services/api/db.json";
import api from "./services/api/api";

import "./scss/App.scss";

const App = () => {
  const [lists, setLists] = useState(filterColorByID(JSON));

  useEffect(() => {}, []);

  const addToList = (modifiedObject) => {
    const updatedList = [...lists, modifiedObject];
    setLists(updatedList);
  };

  const handleRemove = (id) => {
    api.deleteList(id);
    const updatedList = lists.filter((list) => list.id !== id);
    setLists(updatedList);
  };

  return (
    <div className="app">
      <div className="app__sidebar">
        <List items={[{ name: "All tasks" }]} />
        <List items={lists} handleRemove={handleRemove} isRemovable />
        <CreateList colors={JSON.colors} onAdd={addToList} />
      </div>
      <div className="app__tasks">
        <Tasks />
      </div>
    </div>
  );
};

export default App;
