import React from "react";

import { SidebarBadge } from "components";

const SidebarColor = ({ color, handleSelectColor, selectedColor }) => {
  const colorSelect = () => handleSelectColor(color.name);

  return (
    <li className="colors__item">
      <SidebarBadge
        color={color.name}
        onClick={colorSelect}
        selectedColor={selectedColor}
      />
    </li>
  );
};

export default SidebarColor;
