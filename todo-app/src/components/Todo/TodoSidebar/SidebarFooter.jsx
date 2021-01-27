import React, { useState } from "react";

import { SidebarModal } from "../../../components";

const SidebarFooter = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <footer className="sidebar__footer sidebar-bottom">
      <button className="sidebar-bottom__btn" onClick={handleOpenModal}>
        Create category
      </button>
      {openModal && <SidebarModal onModalClose={handleCloseModal} />}
    </footer>
  );
};

export default SidebarFooter;
