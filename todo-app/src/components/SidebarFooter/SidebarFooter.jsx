import React, { useState, useEffect } from "react";

import { SidebarModal } from "..";
import * as api from "../../services/api/api";

const SidebarFooter = ({ colors, onAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValueErr, setInputValueErr] = useState(null);
  const [ColorErr, setColorErr] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    if (colors && colors.length > 0 && Array.isArray(colors)) {
      setSelectedColor(colors[0].id);
    }
  }, [colors]);

  const handleSelectColor = (colorID) => {
    setSelectedColor(colorID);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedColor(null);
    setInputValue("");
    setInputValueErr("");
    setColorErr("");
  };

  const handleCreateItem = () => {
    if (!inputValue) {
      setInputValueErr(true);
      return;
    }
    setInputValueErr(false);

    if (!selectedColor) {
      setColorErr(true);
      return;
    }
    setColorErr("");

    const credentials = { name: inputValue, colorId: selectedColor };
    setIsLoading(true);

    api
      .createList(credentials)
      .then(({ data }) => {
        const color = colors.filter((col) => col.id === selectedColor)[0].name;
        const modifiedData = { ...data, color: { name: color } };
        onAdd(modifiedData);
        handleCloseModal();
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
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
      {showModal && (
        <SidebarModal
          colors={colors}
          inputValue={inputValue}
          inputValueErr={inputValueErr}
          ColorErr={ColorErr}
          selectedColor={selectedColor}
          handleChange={handleChange}
          handleSelectColor={handleSelectColor}
          handleCloseModal={handleCloseModal}
          handleCreateItem={handleCreateItem}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default SidebarFooter;
