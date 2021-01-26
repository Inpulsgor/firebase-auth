import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { logOut } from "../../redux/auth/authOperations";

const Header = () => {
  const currentUser = useSelector((state) => state.auth.user.email);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="header__container container">
      <Link className="header__logo" to="/">
        Todo-app
      </Link>
      <nav className="header__nav">
        <span className="header__user">{currentUser}</span>
        <button type="button" className="header__btn" onClick={handleLogOut}>
          SignOut
        </button>
      </nav>
    </div>
  );
};

export default Header;
