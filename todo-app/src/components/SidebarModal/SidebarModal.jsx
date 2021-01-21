import React from "react";
import { connect } from "react-redux";

import { ReactComponent as CloseSvg } from "../../assets/icons/close.svg";
import { SidebarBadge } from "../../components";

const Modal = ({ colors }) => {
  const handleSelectColor = (colorID) => {
    // setSelectedColor(colorID);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    // setInputValue(value);
  };

  const handleCloseModal = () => {
    // setShowModal(false);
    // setSelectedColor(null);
    // setInputValue("");
    // setInputValueErr("");
    // setColorErr("");
  };

  return (
    <div className="create-list__modal modal">
      <button
        className="modal__btn-close"
        type="button"
        // onClick={handleCloseModal}
      >
        <CloseSvg />
      </button>

      <input
        // onChange={handleChange}
        // value={inputValue}
        className="modal__field field"
        type="text"
        placeholder="enter name..."
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
        {/* {isLoading ? "Creating..." : "Create"} */}
        Create
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  colors: state.colors.items,
});

export default connect(mapStateToProps)(Modal);
