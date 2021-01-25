import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { ReactComponent as RemoveSvg } from "../../assets/icons/remove.svg";
import * as listsOperations from "../../redux/lists/listsOperations";
import { SidebarBadge } from "../../components";

const SidebarList = ({ lists, handleRemoveList, activeList }) => {
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
      {lists &&
        lists.map((list) => (
          <li
            key={list.id}
            className={`list__item`}
            onClick={handleClick ? () => handleClick(list) : null}
          >
            {list.color && <SidebarBadge color={list.color.name} />}
            <span>
              {list.name}
              {list.tasks && `(${list.tasks.length})`}
            </span>

            <button
              className="list__remove"
              type="button"
              onClick={() => handleRemoveList(list.id)}
            >
              <RemoveSvg />
            </button>
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
