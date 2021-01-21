import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import classnames from "classnames";

import { ReactComponent as RemoveSvg } from "../../assets/icons/remove.svg";
import * as listsOperations from "../../redux/lists/listsOperations";
import { SidebarBadge } from "../../components";

const SidebarList = ({ items, isRemovable, handleRemoveList, activeList }) => {
  let history = useHistory();

  const handleClick = (list) => {
    history.push(`/lists/${list.id}`);
    // setActiveList(list);
  };

  const handleRemove = (id) => {
    // api.deleteList(id);
    // const updatedList = lists.filter((list) => list.id !== id);
    // setLists(updatedList);
  };

  const addToList = (modifiedObject) => {
    // const updatedList = [...lists, modifiedObject];
    // setLists(updatedList);
  };

  // useEffect(() => {
  //   const listId = history.location.pathname.split("lists/")[1];

  //   if (lists) {
  //     const list = lists.find((list) => list.id === Number(listId));
  //     setActiveList(list);
  //   }
  // }, [lists, history.location.pathname]);

  return (
    <ul className="list">
      {items &&
        items.map((item) => (
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

const mapStateToProps = (state) => ({
  lists: state.lists.items,
  colors: state.colors.items,
});

const mapDispatchToProps = {
  handleRemoveList: listsOperations.removeList,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarList);
