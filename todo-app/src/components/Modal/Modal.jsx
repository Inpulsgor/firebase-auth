import React from "react";

import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import { Badge } from "../../components";
import "./modal.scss";

const Modal = ({
  colors,
  selectedColor,
  inputValue,
  handleSelectColor,
  handleCloseModal,
  handleChange,
  handleCreateItem,
  inputValueErr,
  ColorErr,
  isLoading,
}) => {
  return (
    <div className="create-list__modal modal">
      <button
        className="modal__btn-close"
        type="button"
        onClick={handleCloseModal}
      >
        <CloseSvg />
      </button>

      <input
        onChange={handleChange}
        value={inputValue}
        className="modal__field field"
        type="text"
        placeholder="enter name..."
      />
      {inputValueErr && (
        <span className="modal__error modal__error-input">
          Input value name is required*
        </span>
      )}

      <ul className="modal__list colors">
        {colors &&
          colors.map((color) => (
            <li key={color.id} className="colors__item">
              <Badge
                color={color.name}
                onClick={() => handleSelectColor(color.id)}
                className={selectedColor === color.id && "active"}
              />
            </li>
          ))}
      </ul>
      {ColorErr && (
        <span className="modal__error modal__error-color">
          Color select is required*
        </span>
      )}

      <button
        className="modal__btn-create button"
        type="button"
        onClick={handleCreateItem}
      >
        {isLoading ? "Creating..." : "Create"}
      </button>
    </div>
  );
};

export default Modal;
