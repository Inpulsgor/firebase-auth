import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as categoriesOperations from "redux/categories/categoriesOperations";
import * as colorsOperations from "redux/colors/colorsOperations";
import { SidebarItem } from "components";

const SidebarList = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
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
      setActiveCategory(category);
    }
  }, [categories, history.location.pathname]);

  const handleCategorySelect = (category) => {
    history.push(`/categories/${category.id}`);
  };

  const handleCategoryRemove = (categoryID) => {
    dispatch(categoriesOperations.removeCategory(categoryID));
  };

  return (
    <div className="sidebar__body categories">
      <ul className="categories__list">
        {categories.length > 0 &&
          categories.map((category) => (
            <SidebarItem
              key={category.id}
              category={category}
              activeCategory={activeCategory}
              onSelect={handleCategorySelect}
              onRemove={handleCategoryRemove}
            />
          ))}
      </ul>
    </div>
  );
};

export default SidebarList;
