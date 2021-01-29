import React from "react";

const SidebarBadge = ({ color, onClick, selectedColor }) => {
  return (
    <i
      onClick={onClick}
      className={
        selectedColor === color
          ? `badge badge--${color} active`
          : `badge badge--${color}`
      }
    ></i>
  );
};

export default SidebarBadge;
