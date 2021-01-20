import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";

import { SidebarHeader, SidebarList, SidebarCreate, Tasks } from "./components";
import api from "./services/api/api";
import "./scss/App.scss";

const App = () => {
  const [lists, setLists] = useState(null);
  const [colors, setColors] = useState(null);
  const [activeList, setActiveList] = useState(null);
  let history = useHistory();

  useEffect(() => {
    api.getListsWithExpand().then(({ data }) => {
      setLists(data);
    });

    api.getColors().then(({ data }) => {
      setColors(data);
    });
  }, []);

  useEffect(() => {
    const listId = history.location.pathname.split("lists/")[1];
    if (lists) {
      const list = lists.find((list) => list.id === Number(listId));
      console.log("useEffect List", list);
      setActiveList(list);
    }
  }, [lists, history.location.pathname]);

  const addToList = (modifiedObject) => {
    const updatedList = [...lists, modifiedObject];
    setLists(updatedList);
  };

  const handleClick = (list) => {
    history.push(`/lists/${list.id}`);
    console.log("Click List", list);
    setActiveList(list);
  };

  const showAllLists = () => {
    history.push("/");
  };

  const handleRemove = (id) => {
    api.deleteList(id);
    const updatedList = lists.filter((list) => list.id !== id);
    setLists(updatedList);
  };

  const handleEditTitle = (id, newTitle) => {
    lists.map((item) => {
      if (item.id === id) {
        item.name = newTitle;
      }
      return item;
    });

    setLists(setLists);
  };

  const handleAddTask = (id, object) => {
    const newList = lists.map((list) => {
      if (list.id === id) {
        list.tasks = [...list.tasks, object];
      }
      return list;
    });
    setLists(newList);
  };

  return (
    <div className="App">
      <aside className="sidebar">
        <SidebarHeader showAllLists={showAllLists} />
        {lists && (
          <SidebarList
            items={lists}
            handleClick={handleClick}
            handleRemove={handleRemove}
            activeList={activeList}
            isRemovable
          />
        )}
        <SidebarCreate colors={colors} onAdd={addToList} />
      </aside>

      <section className="tasks">
        <Route exact path="/">
          {lists &&
            lists.map((list) => (
              <Tasks
                key={list.id}
                list={list}
                handleEditTitle={handleEditTitle}
                handleAddTask={handleAddTask}
              />
            ))}
        </Route>
        <Route path="/lists/:id">
          {activeList && (
            <Tasks
              list={activeList}
              handleEditTitle={handleEditTitle}
              handleAddTask={handleAddTask}
            />
          )}
        </Route>
      </section>
    </div>
  );
};

export default App;
