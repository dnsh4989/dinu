const Utils = {
  setItemToLocalStorage(item) {
    localStorage.setItem(item);
  },

  getItemFromLocalStorage(item) {
    localStorage.getItem(item);
  },
};

module.exports = Utils;
