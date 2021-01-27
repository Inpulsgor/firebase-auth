import React from "react";

const Categories = React.memo(function Categories({
  items,
  activeCategory,
  onSelectCategory,
}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ""}
          onClick={() => onSelectCategory(null)}
        >
          Все
        </li>

        {items.length > 0 &&
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
