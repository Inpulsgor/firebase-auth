import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { ReactComponent as TasksSvg } from "assets/icons/list.svg";
import categoriesSlice from "redux/categories/categoriesSlice";

const SidebarHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
    dispatch(categoriesSlice.actions.setSelectedCategory(null));
  };

  return (
    <header className="sidebar__header sidebar-top">
      <button
        type="button"
        className={
          history.location.pathname === "/"
            ? `sidebar-top__btn active`
            : `sidebar-top__btn`
        }
        onClick={handleClick}
      >
        <TasksSvg className="sidebar-top__icon" />
        <span className="sidebar-top__text">All categories</span>
      </button>
    </header>
  );
};

export default SidebarHeader;
