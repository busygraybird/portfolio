export const setItemToLS = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getItemFromLS = (key) => JSON.parse(localStorage.getItem(key));
