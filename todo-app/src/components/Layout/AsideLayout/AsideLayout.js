import React from "react";
import { useHistory } from "react-router-dom";

import { SidebarHeader, SidebarList, SidebarCreate } from "../../../components";

const AsideLayout = () => {
  let history = useHistory();

  const showAllLists = () => {
    history.push("/");
  };
  return (
    <aside className="sidebar">
      <SidebarHeader showAllLists={showAllLists} />
      {lists && (
        <SidebarList
          items={lists}
          handleClick={handleClick}
          handleRemove={handleRemove}
          activeList={activeList}
          isRemovable
        />
      )}
      <SidebarCreate colors={colors} onAdd={addToList} />
    </aside>
  );
};

export default AsideLayout;
