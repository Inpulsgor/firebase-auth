import React from "react";

const Categories = React.memo(function Categories({
  items,
  activeCategory,
  onSelectCategory,
}) {
	const onSelectAll = () => onSelectCategory(null);

  return (
    <div className="categories">
      <ul className="categories__list">
        <li
          className={"categories__item", activeCategory === null ? "active" : ""}
          onClick={onSelectAll}
        >
          All
        </li>

        {items.length && items.map((item, index) => (
            <li
              key={`${index}_${item}`}
              className={activeCategory === index ? "active" : ""}
              onClick={() => onSelectCategory(index)}
            >
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
