import React from "react";
import classnames from "classnames";

import "./badge.scss";

const Badge = ({ color, onClick, className }) => {
  return (
    <i
      onClick={onClick}
      className={classnames("badge", { [`badge--${color}`]: color }, className)}
    ></i>
  );
};

export default Badge;
