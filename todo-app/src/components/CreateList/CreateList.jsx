import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Modal from "../Modal/Modal";
import "./createList.scss";

const CreateList = ({ colors, onAdd }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [inputValueErr, setInputValueErr] = useState(null);
  const [ColorErr, setColorErr] = useState(null);

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

    const color = colors.filter((col) => col.id === selectedColor)[0].name;
    const createdData = {
      id: uuidv4(),
      name: inputValue,
      color: color,
    };

    onAdd(createdData);
    handleCloseModal();
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
        <Modal
          colors={colors}
          inputValue={inputValue}
          inputValueErr={inputValueErr}
          ColorErr={ColorErr}
          selectedColor={selectedColor}
          handleChange={handleChange}
          handleSelectColor={handleSelectColor}
          handleCloseModal={handleCloseModal}
          handleCreateItem={handleCreateItem}
        />
      )}
    </div>
  );
};

export default CreateList;
