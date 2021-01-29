import React from "react";

import { SidebarBadge } from "components";

const SidebarColor = ({ color, handleSelectColor, selectedColor }) => {
  const colorSelect = () => handleSelectColor(color.id);

  return (
    <li className="colors__item">
      <SidebarBadge
        color={color.name}
        onClick={colorSelect}
        className={selectedColor === color.id && "active"}
      />
    </li>
  );
};

export default SidebarColor;
