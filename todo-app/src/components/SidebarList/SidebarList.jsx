import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";

import { ReactComponent as RemoveSvg } from "../../assets/icons/remove.svg";
import * as listsOperations from "../../redux/lists/listsOperations";
import { SidebarBadge } from "../../components";

const SidebarList = ({
  items,
  isRemovable,
  handleClick,
  handleRemoveList,
  activeList,
}) => {
  return (
    <ul className="list">
      {items.map((item) => (
        <li
          key={item.id}
          className={classnames("list__item", {
            active: activeList && activeList.id === item.id,
          })}
          onClick={handleClick ? () => handleClick(item) : null}
        >
          {item.color && <SidebarBadge color={item.color.name} />}
          <span>
            {item.name}
            {item.tasks && `(${item.tasks.length})`}
          </span>

          {isRemovable && (
            <button
              className="list__remove"
              type="button"
              onClick={() => handleRemoveList(item.id)}
            >
              <RemoveSvg />
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

const mapDispatchToProps = {
  handleRemoveList: listsOperations.removeList,
};

export default connect(null, mapDispatchToProps)(SidebarList);
