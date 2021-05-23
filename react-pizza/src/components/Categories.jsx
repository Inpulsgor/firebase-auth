import React from "react";

const Categories = React.memo(function Categories({
  items,
  activeCategory,
  onSelectCategory,
}) {
	const onSelect = () => onSelectCategory(null);

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={onSelect}
        >
          All
        </li>

        {items.length &&
          items.map((item, index) => (
            <li
              key={item}
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
