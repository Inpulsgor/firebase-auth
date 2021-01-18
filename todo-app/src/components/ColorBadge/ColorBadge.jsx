import React from "react";
import classnames from "classnames";

import "./colorBadge.scss";

const ColorBadge = ({ color, onClick, className }) => (
  <i
    onClick={onClick}
    className={classnames("badge", { [`badge--${color}`]: color }, className)}
  ></i>
);

export default ColorBadge;
