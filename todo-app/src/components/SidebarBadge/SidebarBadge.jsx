import React from "react";

const SidebarBadge = ({ color, onClick, className }) => {
  return <i onClick={onClick} className={`badge badge--${color}`}></i>;
};

export default SidebarBadge;
