import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { AppLayout, AsideLayout } from "../Layout";
import * as listsOperations from "../../redux/lists/listsOperations";
import * as colorsOperations from "../../redux/colors/colorsOperations";

import "../../scss/main.scss";

const App = ({ fetchLists, fetchColors, lists, colors }) => {
  const [activeList, setActiveList] = useState(null);

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  useEffect(() => {
    fetchColors();
  }, [fetchColors]);

  // useEffect(() => {
  //   const listId = history.location.pathname.split("lists/")[1];

  //   if (lists) {
  //     const list = lists.find((list) => list.id === Number(listId));
  //     setActiveList(list);
  //   }
  // }, [lists, history.location.pathname]);

  const addToList = (modifiedObject) => {
    const updatedList = [...lists, modifiedObject];
    // setLists(updatedList);
  };

  const handleClick = (list) => {
    history.push(`/lists/${list.id}`);
    // setActiveList(list);
  };

  const handleRemove = (id) => {
    api.deleteList(id);
    const updatedList = lists.filter((list) => list.id !== id);
    // setLists(updatedList);
  };

  const handleEditTitle = (id, newTitle) => {
    lists.map((item) => {
      if (item.id === id) {
        item.name = newTitle;
      }
      return item;
    });

    // setLists(setLists);
  };

  const handleAddTask = (id, object) => {
    const newList = lists.map((list) => {
      if (list.id === id) {
        list.tasks = [...list.tasks, object];
      }
      return list;
    });
    // setLists(newList);
  };

  return (
    <AppLayout>
      <AsideLayout />

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
        {lists && activeList && (
          <Tasks
            list={activeList}
            handleEditTitle={handleEditTitle}
            handleAddTask={handleAddTask}
          />
        )}
      </Route>
    </AppLayout>
  );
};

const mapStateToProps = (state) => ({
  lists: state.lists.items,
  colors: state.colors.items,
});

const mapDispatchToProps = {
  fetchLists: listsOperations.fetchLists,
  fetchColors: colorsOperations.fetchColors,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
