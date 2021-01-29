import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as colorsOperations from "redux/colors/colorsOperations";
import { SidebarColor } from "components";

const SidebarForm = ({ onModalClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const colors = useSelector((state) => state.colors.items);
  const dispatch = useDispatch();

  console.log("%cCOLORS", "color: yellow;", colors);

  useEffect(() => {
    dispatch(colorsOperations.getColors());
  }, [dispatch]);

  useEffect(() => {
    if (colors && colors.length > 0 && Array.isArray(colors)) {
      setSelectedColor(colors[0].id);
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
    // const credentials = { name: inputValue, colorId: selectedColor };

    // api
    //   .createCategory(credentials)
    //   .then((response) => response)
    //   .catch((error) => console.log(error));

    setInputValue("");
    onModalClose();

    //   api
    //     .createList(credentials)
    //     .then(({ data }) => {
    //       const color = colors.filter((col) => col.id === selectedColor)[0].name;
    //       const modifiedData = { ...data, color: { name: color } };
    //       onAdd(modifiedData);
    //       onModalClose();
    //     })
    //     .catch((error) => console.log(error))
    //     .finally(() => setIsLoading(false));
  };

  const handleSelectColor = (colorID) => {
    setSelectedColor(colorID);
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
