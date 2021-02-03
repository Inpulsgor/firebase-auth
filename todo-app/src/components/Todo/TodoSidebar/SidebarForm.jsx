import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as categoriesOperations from "redux/categories/categoriesOperations";
import { SidebarColor } from "components";

const SidebarForm = ({ onModalClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colors = useSelector((state) => state.colors.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (colors && colors.length > 0 && Array.isArray(colors)) {
      setSelectedColor(colors[0].name);
    }
  }, [colors]);

  const handleChange = ({ target }) => setInputValue(target.value);

  const handleCategoryCreate = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }
    if (!selectedColor) {
      return;
    }

    const category = { name: inputValue, color: selectedColor };

    // dispatch(categoriesOperations.createCategory(category));

    setInputValue("");
    onModalClose();
  };

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <form onSubmit={handleCategoryCreate} className="modal__form modal-form">
      <div className="modal-form__group group">
        <input
          type="text"
          id="category"
          name="category"
          className="modal-form__input input"
          placeholder=" "
          value={inputValue}
          onChange={handleChange}
        />
        <label htmlFor="category" className="modal-form__label label">
          Enter name...
        </label>
      </div>

      <ul className="modal__list colors">
        {colors &&
          colors.length > 0 &&
          colors.map((color) => (
            <SidebarColor
              key={color.id}
              color={color}
              selectedColor={selectedColor}
              handleSelectColor={handleSelectColor}
            />
          ))}
      </ul>

      <button type="submit" className="modal__btn-create button">
        Create
      </button>
    </form>
  );
};

export default SidebarForm;
