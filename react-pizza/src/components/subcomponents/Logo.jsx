import React from 'react';
import { Link } from "react-router-dom";
import PizzaLogo from "../../assets/icons/logo.svg";

const Logo = () => {
	return (
		<Link to="/" className="header__logo">
            <img width="38" src={PizzaLogo} alt="Pizza logo" />
        </Link>
	)
}

export default Logo;
