import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { SidebarColor } from "components";

const SidebarForm = ({ onModalClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colors = useSelector((state) => state.colors.items);

  // console.log("%cCOLORS", "color: yellow;", colors);
  console.log("%cSelectedColor", "color: yellow;", selectedColor);

  /*
   * useEffect || set first list-item(color) as selected color(active)
   */

  useEffect(() => {
    if (colors && colors.length > 0 && Array.isArray(colors)) {
      setSelectedColor(colors[0].name);
    }
  }, [colors]);

  /*
   * useEffect || get input value && set value to state
   */

  const handleChange = ({ target }) => setInputValue(target.value);

  /*
   * useEffect || create new category / post data to firebase db && update redux store
   */

  const handleCategoryCreate = (e) => {
    e.preventDefault();

    if (!inputValue) {
      return;
    }
    if (!selectedColor) {
      return;
    }

    const credentials = { name: inputValue, color: selectedColor, tasks: [] };

    // api
    //   .createCategory(credentials)
    //   .then((response) => response)
    //   .catch((error) => console.log(error));

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
              key={color.hex}
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
