import React from "react";
import classnames from "classnames";

import "./sidebarBadge.scss";

const SidebarBadge = ({ color, onClick, className }) => {
  return (
    <i
      onClick={onClick}
      className={classnames("badge", { [`badge--${color}`]: color }, className)}
    ></i>
  );
};

export default SidebarBadge;
