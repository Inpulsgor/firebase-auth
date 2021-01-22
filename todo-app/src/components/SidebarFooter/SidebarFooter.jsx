import React, { useState, useEffect } from "react";

import { SidebarModal } from "..";
import * as api from "../../services/api/api";

const SidebarFooter = ({ colors, onAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [inputValue, setInputValue] = useState("");

  // useEffect(() => {
  //   if (colors && colors.length > 0 && Array.isArray(colors)) {
  //     setSelectedColor(colors[0].id);
  //   }
  // }, [colors]);

  const handleCreateItem = () => {
    // if (!inputValue) {
    //   return;
    // }
    // if (!selectedColor) {
    //   return;
    // }
    // const credentials = { name: inputValue, colorId: selectedColor };
    // api
    //   .createList(credentials)
    //   .then(({ data }) => {
    //     const color = colors.filter((col) => col.id === selectedColor)[0].name;
    //     const modifiedData = { ...data, color: { name: color } };
    //     onAdd(modifiedData);
    //     handleCloseModal();
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => setIsLoading(false));
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedColor(null);
    setInputValue("");
  };

  return (
    <div className="create-list">
      <button
        className="create-list__btn"
        type="button"
        onClick={() => setShowModal(!showModal)}
      >
        Create new list
      </button>
      {showModal && <SidebarModal handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default SidebarFooter;
