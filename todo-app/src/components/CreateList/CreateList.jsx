import React, { useState } from "react";

import List from "../List/List";
import Modal from "../Modal/Modal";
import "./createList.scss";

const MenuListBtn = ({ colors }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(colors[0].id);

  const handleSelectColor = (colorID) => {
    setSelectedColor(colorID);
  };

  return (
    <div className="create-list">
      <List
        handleCLick={() => setShowModal(!showModal)}
        items={[
          {
            icon: null,
            color: null,
            name: "Create new list",
            active: false,
            className: "list__item",
          },
        ]}
      />
      {showModal && (
        <Modal
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
