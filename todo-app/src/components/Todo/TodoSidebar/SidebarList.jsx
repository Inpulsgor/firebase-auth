import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getCategories } from "../../../redux/categories/categoriesOperations";
import { SidebarItem } from "../../../components";

const SidebarList = () => {
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log(categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

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
