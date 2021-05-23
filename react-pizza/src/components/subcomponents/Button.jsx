import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
		className={classnames("button", className, { "button--outline": outline, })}
        onClick={onClick}
	>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
