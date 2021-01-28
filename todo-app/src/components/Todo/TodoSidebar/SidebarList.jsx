import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { firebaseDB } from "../../../services/api/firebase";

// import * as listsOperations from "../../../redux/lists/listsOperations";
import { SidebarItem } from "../../../components";

const SidebarList = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);

  // const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    firebaseDB.collection("categories").onSnapshot((snapshot) => {
      setCategories(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // useEffect(() => {
  //   const listId = history.location.pathname.split("lists/")[1];

  //   if (lists) {
  //     const list = lists.find((list) => list.id === Number(listId));
  //     setActiveList(list);
  //   }
  // }, [lists, history.location.pathname]);

  const handleCategorySelect = (category) => {
    history.push(`/category/${category.id}`);
    // setActiveList(list);
  };

  const handleCategoryRemove = (id) => {
    // api.deleteList(id);
    // const updatedList = lists.filter((list) => list.id !== id);
    // setLists(updatedList);
  };

  // const addToList = (modifiedObject) => {
  // const updatedList = [...lists, modifiedObject];
  // setLists(updatedList);
  // };

  return (
    <div className="sidebar__body categories">
      <ul className="categories__list">
        {categories.length > 0 &&
          categories.map((category) => (
            <SidebarItem
              key={category.color}
              category={category}
              onSelect={handleCategorySelect}
              onRemove={handleCategoryRemove}
            />
          ))}
      </ul>
    </div>
  );
};

export default SidebarList;
