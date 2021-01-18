import React from "react";
import "./menuListModal.scss";

import ColorBadge from "../ColorBadge/ColorBadge";
import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";

const MenuListModal = ({
  colors,
  selectedColor,
  handleSelectColor,
  setShowModal,
}) => {
  return (
    <div className="create-list__modal modal">
      <button
        className="modal__btn-close"
        type="button"
        onClick={() => setShowModal(false)}
      >
        <CloseSvg />
      </button>

      <input
        className="modal__field field"
        type="text"
        placeholder="list name"
      />

      <ul className="modal__list colors">
        {colors &&
          colors.map((color) => (
            <li key={color.id} className="colors__item">
              <ColorBadge
                color={color.name}
                onClick={() => handleSelectColor(color.id)}
                className={selectedColor === color.id && "active"}
              />
            </li>
          ))}
      </ul>

      <button className="modal__btn-create button" type="button">
        Create
      </button>
    </div>
  );
};

export default MenuListModal;
