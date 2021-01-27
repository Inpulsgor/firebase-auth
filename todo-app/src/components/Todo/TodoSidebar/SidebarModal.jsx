import React, { useState } from "react";

import { ReactComponent as CloseSvg } from "../../../assets/icons/close.svg";
import { SidebarColor } from "../../../components";

const Modal = ({ colors, onModalClose }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);

  // useEffect(() => {
  //   if (colors && colors.length > 0 && Array.isArray(colors)) {
  //     setSelectedColor(colors[0].id);
  //   }
  // }, [colors]);

  const handleChange = ({ target: value }) => setInputValue(value);

  const handleSubmit = () => {
    if (!inputValue) {
      return;
    }
    if (!selectedColor) {
      return;
    }
    // const credentials = { name: inputValue, colorId: selectedColor };
    // api
    //   .createList(credentials)
    //   .then(({ data }) => {
    //     const color = colors.filter((col) => col.id === selectedColor)[0].name;
    //     const modifiedData = { ...data, color: { name: color } };
    //     onAdd(modifiedData);
    //     onModalClose();
    //   })
    //   .catch((error) => console.log(error))
    //   .finally(() => setIsLoading(false));
  };

  const handleSelectColor = (colorID) => {
    setSelectedColor(colorID);
  };

  return (
    <div className="sidebar__modal modal">
      <button type="button" className="modal__btn-close" onClick={onModalClose}>
        <CloseSvg className="modal__btn-svg" />
      </button>

      <form className="modal__form modal-form">
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
            colors.map((color) => (
              <SidebarColor
                key={color.id}
                color={color}
                selectedColor={selectedColor}
                handleSelectColor={handleSelectColor}
              />
            ))}
        </ul>

        <button
          type="submit"
          className="modal__btn-create button"
          onClick={handleSubmit}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Modal;
