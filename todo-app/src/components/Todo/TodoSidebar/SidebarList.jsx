import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import categoriesSlice from "redux/categories/categoriesSlice";
import * as categoriesOperations from "redux/categories/categoriesOperations";
import * as colorsOperations from "redux/colors/colorsOperations";
import { SidebarItem } from "components";

const SidebarList = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const selectedCategory = useSelector((state) => state.categories.selected);
  const categories = useSelector((state) => state.categories.items);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(categoriesOperations.getCategories());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(colorsOperations.getColors());
    }
  }, [isAuthenticated, dispatch]);

  useEffect(() => {
    const locationID = history.location.pathname.split("categories/")[1];

    if (locationID && categories) {
      const category = categories.find((item) => item.id === locationID);
      dispatch(categoriesSlice.actions.setSelectedCategory(category));
    }
  }, [dispatch, categories, history.location.pathname]);

  const handleCategorySelect = (category) => {
    history.push(`/categories/${category.id}`);
  };

  const handleCategoryRemove = (categoryID) => {
    dispatch(categoriesSlice.actions.deleteCategorySuccess(categoryID));
    dispatch(categoriesSlice.actions.setSelectedCategory(null));
  };

  return (
    <div className="sidebar__body categories">
      <ul className="categories__list">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => (
            <SidebarItem
              key={category.id}
              category={category}
              selectedCategory={selectedCategory}
              onSelect={handleCategorySelect}
              onRemove={handleCategoryRemove}
            />
          ))}
      </ul>
    </div>
  );
};

export default SidebarList;
