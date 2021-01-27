import React from "react";
// import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// import * as listsOperations from "../../../redux/lists/listsOperations";
import { SidebarItem } from "../../../components";

const SidebarList = ({ lists, activeList }) => {
  // const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   const listId = history.location.pathname.split("lists/")[1];

  //   if (lists) {
  //     const list = lists.find((list) => list.id === Number(listId));
  //     setActiveList(list);
  //   }
  // }, [lists, history.location.pathname]);

  const handleCategorySelect = (list) => {
    history.push(`/lists/${list.id}`);
    // setActiveList(list);
  };

  const handleCategoryRemove = (id) => {
    // api.deleteList(id);
    // const updatedList = lists.filter((list) => list.id !== id);
    // setLists(updatedList);
  };

  // const addToList = (modifiedObject) => {
  // const updatedList = [...lists, modifiedObject];
  // setLists(updatedList);
  // };

  return (
    <section className="sidebar__body categories">
      <ul className="categories__list">
        {lists &&
          lists.length > 0 &&
          lists.map((list) => (
            <SidebarItem
              key={list.id}
              list={list}
              handleCategorySelect={handleCategorySelect}
              handleCategoryRemove={handleCategoryRemove}
            />
          ))}
      </ul>
    </section>
  );
};

// const mapStateToProps = (state) => ({
//   lists: state.lists.items,
//   colors: state.colors.items,
// });

// const mapDispatchToProps = {
//   handleRemoveList: listsOperations.removeList,
// };

export default SidebarList;
