import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logOut } from "redux/auth/authOperations";

const Header = () => {
  const currentUser = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="header__container container">
      <Link className="logo" to="/">
        Todo-app
      </Link>
      <nav className="header__nav nav">
        <span className="nav__user">{currentUser ? currentUser : null}</span>
        <button className="nav__btn" type="button" onClick={handleLogOut}>
          SignOut
        </button>
      </nav>
    </div>
  );
};

export default Header;
