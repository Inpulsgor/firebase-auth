import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Button, Logo } from "../";
import { ReactComponent as CartSvg } from "../../assets/icons/cart.svg"

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <header className="header">
      <div className="container">
		<Logo />

        <div className="header__cart">
          <Link to="/cart">
            <Button className="button--cart">
              <span>{totalPrice} ₴</span>
              <span className="button__delimiter"></span>
              <CartSvg />
              <span>{totalCount}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
