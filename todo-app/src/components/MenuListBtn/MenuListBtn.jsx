import React, { useState } from "react";

import MenuList from "../MenuList/MenuList";
import MenuListModal from "../MenuListModal/MenuListModal";
import "./menuListBtn.scss";

const MenuListBtn = ({ colors }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleSelectColor = (colorID) => {
    console.log(colorID);
    setSelectedColor(colorID);
  };

  return (
    <div className="create-list">
      <MenuList
        handleCLick={() => setShowModal(!showModal)}
        items={[
          {
            icon: null,
            color: null,
            title: "Create new list",
            active: false,
            className: "list__item",
          },
        ]}
      />
      {showModal && (
        <MenuListModal
          colors={colors}
          selectedColor={selectedColor}
          handleSelectColor={handleSelectColor}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default MenuListBtn;
