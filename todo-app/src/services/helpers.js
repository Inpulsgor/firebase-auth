export const filterColorByID = (data) => {
  return data.lists.map((item) => {
    item.color = data.colors.filter(
      (color) => color.id === item.colorId
    )[0].name;
    return item;
  });
};
