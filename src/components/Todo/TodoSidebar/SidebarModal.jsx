import React from "react";

import { ReactComponent as CloseSvg } from "assets/icons/close.svg";
import { SidebarForm } from "components";

const SidebarModal = ({ onModalClose }) => {
  return (
    <div className="sidebar__modal modal">
      <button type="button" className="modal__btn-close" onClick={onModalClose}>
        <CloseSvg className="modal__btn-svg" />
      </button>
      <SidebarForm onModalClose={onModalClose} />
    </div>
  );
};

export default SidebarModal;
