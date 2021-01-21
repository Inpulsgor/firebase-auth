import React from "react";

import { SidebarHeader, SidebarList, SidebarFooter } from "../../../components";

const AsideLayout = () => {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <SidebarList />
      <SidebarFooter />
    </aside>
  );
};

export default AsideLayout;
