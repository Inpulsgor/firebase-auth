import React, { useState } from "react";
import { connect } from "react-redux";

import { ReactComponent as CloseSvg } from "../../../../assets/icons/close.svg";
import { SidebarBadge } from "../../../../components";

const Modal = ({ colors, handleCloseModal }) => {
  const [inputValue, setInputValue] = useState("");

  // const handleSelectColor = (colorID) => {
  // setSelectedColor(colorID);
  // };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="create-list__modal modal">
      <button
        type="button"
        className="modal__btn-close"
        onClick={handleCloseModal}
      >
        <CloseSvg />
      </button>

      <input
        type="text"
        className="modal__field field"
        placeholder="enter name..."
        value={inputValue}
        onChange={handleChange}
      />

      <ul className="modal__list colors">
        {colors.length > 0 &&
          colors.map((color) => (
            <li key={color.id} className="colors__item">
              <SidebarBadge
                color={color.name}
                // onClick={() => handleSelectColor(color.id)}
                // className={selectedColor === color.id && "active"}
              />
            </li>
          ))}
      </ul>

      <button
        className="modal__btn-create button"
        type="button"
        // onClick={handleCreateItem}
      >
        Create
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  colors: state.colors.items,
});

export default connect(mapStateToProps)(Modal);
